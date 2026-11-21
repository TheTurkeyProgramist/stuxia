// Плавне згасання/поява ліній графіка при вмиканні/вимкненні в легенді.
// Chart.js просто прибирає dataset з hidden: true, тож лінія зникала різко.
// Плагін тримає dataset видимим, поки йде анімація, і малює його з globalAlpha.
const DURATION = 260;

export const fadePlugin = {
  id: "datasetFade",

  beforeUpdate(chart) {
    const state = (chart.$fade ||= {});
    chart.data.datasets.forEach((ds, i) => {
      const wantHidden = !!ds.hidden;
      const st = (state[i] ||= { a: wantHidden ? 0 : 1, t: wantHidden ? 0 : 1 });
      st.t = wantHidden ? 0 : 1;
      if (st.a !== st.t) {
        ds.hidden = false; // тримаємо видимою до кінця анімації
        st.from = st.a;
        st.start = performance.now();
        if (!st.raf) {
          const step = (now) => {
            const k = Math.min(1, (now - st.start) / DURATION);
            st.a = st.from + (st.t - st.from) * k;
            if (k < 1 && chart.ctx) {
              st.raf = requestAnimationFrame(step);
              chart.draw();
            } else {
              st.raf = 0;
              st.a = st.t;
              if (chart.ctx) {
                if (st.t === 0) chart.data.datasets[i].hidden = true;
                chart.update("none");
              }
            }
          };
          st.raf = requestAnimationFrame(step);
        }
      }
    });
  },

  beforeDatasetDraw(chart, args) {
    const st = chart.$fade?.[args.index];
    if (!st || st.a === 1) return;
    chart.ctx.save();
    chart.ctx.globalAlpha *= st.a;
  },

  afterDatasetDraw(chart, args) {
    const st = chart.$fade?.[args.index];
    if (!st || st.a === 1) return;
    chart.ctx.restore();
  },

  beforeDestroy(chart) {
    Object.values(chart.$fade || {}).forEach((st) => st.raf && cancelAnimationFrame(st.raf));
  },
};
