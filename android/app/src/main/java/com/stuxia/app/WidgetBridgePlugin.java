package com.stuxia.app;

import android.content.Context;
import android.content.SharedPreferences;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Міст «сайт → віджет»: застосунок передає місто (координати, назву, одиницю температури),
 * віджет зберігає їх і сам тягне прогноз з Open-Meteo.
 * JS: window.Capacitor.Plugins.WidgetBridge.setLocation({ lat, lon, name, unit })
 */
@CapacitorPlugin(name = "WidgetBridge")
public class WidgetBridgePlugin extends Plugin {

    @PluginMethod
    public void setLocation(PluginCall call) {
        Double lat = call.getDouble("lat");
        Double lon = call.getDouble("lon");
        if (lat == null || lon == null || Double.isNaN(lat) || Double.isNaN(lon)
                || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
            call.reject("lat/lon required");
            return;
        }
        String name = call.getString("name", "");
        String unit = call.getString("unit", "C");

        Context ctx = getContext();
        SharedPreferences prefs = ctx.getSharedPreferences(WeatherWidgetProvider.PREFS, Context.MODE_PRIVATE);
        boolean changed = prefs.getFloat("lat", 999f) != lat.floatValue()
                || prefs.getFloat("lon", 999f) != lon.floatValue()
                || !unit.equals(prefs.getString("unit", "C"))
                || !name.equals(prefs.getString("name", ""));
        if (changed) {
            prefs.edit()
                    .putFloat("lat", lat.floatValue())
                    .putFloat("lon", lon.floatValue())
                    .putString("name", name)
                    .putString("unit", unit)
                    .remove("updatedAt") // старий прогноз — для іншого міста
                    .apply();
            WeatherWidgetProvider.refreshAll(ctx);
        }
        JSObject ret = new JSObject();
        ret.put("changed", changed);
        call.resolve(ret);
    }
}
