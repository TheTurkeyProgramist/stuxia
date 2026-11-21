package com.stuxia.app;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.view.View;
import android.widget.RemoteViews;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Віджет «Погода зараз»: місто з застосунку, температура, відчувається, мін/макс, вітер.
 * Дані — Open-Meteo (без ключа), кеш у SharedPreferences, щоб офлайн показувати останні значення.
 */
public class WeatherWidgetProvider extends AppWidgetProvider {
    static final String PREFS = "stuxia_widget";
    static final String ACTION_REFRESH = "com.stuxia.app.WIDGET_REFRESH";

    @Override
    public void onUpdate(Context context, AppWidgetManager manager, int[] ids) {
        render(context, manager, ids);
        fetchAsync(context, goAsync());
    }

    @Override
    public void onEnabled(Context context) {
        fetchAsync(context, null);
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        super.onReceive(context, intent);
        if (ACTION_REFRESH.equals(intent.getAction())) {
            fetchAsync(context, goAsync());
        }
    }

    /** Оновити всі віджети (викликає міст після зміни міста). */
    static void refreshAll(Context context) {
        fetchAsync(context.getApplicationContext(), null);
    }

    private static void fetchAsync(final Context context, final PendingResult pending) {
        new Thread(() -> {
            try {
                fetch(context);
            } catch (Exception ignored) {
                // без мережі лишаємо кеш
            } finally {
                AppWidgetManager manager = AppWidgetManager.getInstance(context);
                int[] ids = manager.getAppWidgetIds(new ComponentName(context, WeatherWidgetProvider.class));
                render(context, manager, ids);
                if (pending != null) pending.finish();
            }
        }).start();
    }

    private static void fetch(Context context) throws Exception {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        if (!prefs.contains("lat") || !prefs.contains("lon")) return;
        double lat = prefs.getFloat("lat", 0f);
        double lon = prefs.getFloat("lon", 0f);
        String url = String.format(Locale.US,
                "https://api.open-meteo.com/v1/forecast?latitude=%.4f&longitude=%.4f"
                        + "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day"
                        + "&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=ms&timezone=auto&forecast_days=1",
                lat, lon);
        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(10000);
        try {
            if (conn.getResponseCode() != 200) return;
            StringBuilder sb = new StringBuilder();
            try (BufferedReader r = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"))) {
                String line;
                while ((line = r.readLine()) != null) sb.append(line);
            }
            JSONObject json = new JSONObject(sb.toString());
            JSONObject cur = json.getJSONObject("current");
            JSONObject daily = json.getJSONObject("daily");
            prefs.edit()
                    .putFloat("temp", (float) cur.getDouble("temperature_2m"))
                    .putFloat("feels", (float) cur.getDouble("apparent_temperature"))
                    .putInt("code", cur.getInt("weather_code"))
                    .putInt("isDay", cur.optInt("is_day", 1))
                    .putFloat("wind", (float) cur.getDouble("wind_speed_10m"))
                    .putFloat("max", (float) daily.getJSONArray("temperature_2m_max").getDouble(0))
                    .putFloat("min", (float) daily.getJSONArray("temperature_2m_min").getDouble(0))
                    .putLong("updatedAt", System.currentTimeMillis())
                    .apply();
        } finally {
            conn.disconnect();
        }
    }

    private static void render(Context context, AppWidgetManager manager, int[] ids) {
        if (ids == null || ids.length == 0) return;
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);

        Intent open = new Intent(context, MainActivity.class);
        open.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent openPi = PendingIntent.getActivity(context, 0, open,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Intent refresh = new Intent(context, WeatherWidgetProvider.class).setAction(ACTION_REFRESH);
        PendingIntent refreshPi = PendingIntent.getBroadcast(context, 1, refresh,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        for (int id : ids) {
            RemoteViews v = new RemoteViews(context.getPackageName(), R.layout.widget_weather);
            v.setOnClickPendingIntent(R.id.widget_root, openPi);
            v.setOnClickPendingIntent(R.id.widget_refresh, refreshPi);

            boolean hasData = prefs.contains("updatedAt");
            boolean hasLocation = prefs.contains("lat");
            if (!hasData) {
                v.setViewVisibility(R.id.widget_data, View.GONE);
                v.setViewVisibility(R.id.widget_empty, View.VISIBLE);
                v.setTextViewText(R.id.widget_empty, context.getString(
                        hasLocation ? R.string.widget_loading : R.string.widget_pick_city));
            } else {
                String unit = prefs.getString("unit", "C");
                int code = prefs.getInt("code", 0);
                boolean day = prefs.getInt("isDay", 1) == 1;
                v.setViewVisibility(R.id.widget_data, View.VISIBLE);
                v.setViewVisibility(R.id.widget_empty, View.GONE);
                String name = prefs.getString("name", "");
                v.setTextViewText(R.id.widget_city, name.isEmpty() ? context.getString(R.string.app_name) : name);
                v.setTextViewText(R.id.widget_icon, icon(code, day));
                v.setTextViewText(R.id.widget_temp, temp(prefs.getFloat("temp", 0f), unit));
                v.setTextViewText(R.id.widget_desc, describe(context, code));
                v.setTextViewText(R.id.widget_feels, context.getString(R.string.widget_feels,
                        temp(prefs.getFloat("feels", 0f), unit)));
                v.setTextViewText(R.id.widget_range, "↑ " + temp(prefs.getFloat("max", 0f), unit)
                        + "  ↓ " + temp(prefs.getFloat("min", 0f), unit));
                v.setTextViewText(R.id.widget_wind, context.getString(R.string.widget_wind,
                        Math.round(prefs.getFloat("wind", 0f) * 10f) / 10f));
                v.setTextViewText(R.id.widget_updated, new SimpleDateFormat("HH:mm", Locale.getDefault())
                        .format(new Date(prefs.getLong("updatedAt", 0L))));
            }
            manager.updateAppWidget(id, v);
        }
    }

    private static String temp(float celsius, String unit) {
        double v = celsius;
        String suffix = "°C";
        if ("F".equals(unit)) {
            v = celsius * 9.0 / 5.0 + 32.0;
            suffix = "°F";
        } else if ("K".equals(unit)) {
            v = celsius + 273.15;
            suffix = " K";
        }
        return Math.round(v) + suffix;
    }

    private static String icon(int code, boolean day) {
        if (code == 0) return day ? "☀️" : "🌙";
        if (code == 1 || code == 2) return day ? "🌤️" : "☁️";
        if (code == 3) return "☁️";
        if (code == 45 || code == 48) return "🌫️";
        if (code >= 51 && code <= 57) return "🌦️";
        if (code >= 61 && code <= 67) return "🌧️";
        if (code >= 71 && code <= 77) return "❄️";
        if (code >= 80 && code <= 82) return "🌧️";
        if (code == 85 || code == 86) return "🌨️";
        if (code >= 95) return "⛈️";
        return "🌡️";
    }

    private static String describe(Context c, int code) {
        if (code == 0) return c.getString(R.string.wmo_clear);
        if (code <= 3) return c.getString(R.string.wmo_cloudy);
        if (code == 45 || code == 48) return c.getString(R.string.wmo_fog);
        if (code >= 51 && code <= 57) return c.getString(R.string.wmo_drizzle);
        if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return c.getString(R.string.wmo_rain);
        if ((code >= 71 && code <= 77) || code == 85 || code == 86) return c.getString(R.string.wmo_snow);
        if (code >= 95) return c.getString(R.string.wmo_storm);
        return "";
    }
}
