import { requestMapPick, takePendingMapPick, reportMapPick, START_MAP_PICK_EVENT, MAP_PICKED_EVENT } from "./heroEvents.js";

describe("вибір точки на Карті Стихії", () => {
  beforeEach(() => {
    globalThis.window = new EventTarget();
    takePendingMapPick();
  });

  test("запит чекає на карту, яку ще не змонтовано, і віддається лише один раз", () => {
    requestMapPick();
    expect(takePendingMapPick()).toBe(true);
    expect(takePendingMapPick()).toBe(false);
  });

  test("змонтована карта дізнається про запит подією", () => {
    let started = 0;
    window.addEventListener(START_MAP_PICK_EVENT, () => {
      started += 1;
    });
    requestMapPick();
    expect(started).toBe(1);
  });

  test("вибрана точка доходить до Hero з координатами", () => {
    let detail = null;
    window.addEventListener(MAP_PICKED_EVENT, (event) => {
      detail = event.detail;
    });
    reportMapPick(50.45, 30.52);
    expect(detail).toEqual({ lat: 50.45, lon: 30.52 });
  });
});
