import { describe, expect, it } from "bun:test";
import { uniquePoints, notDuplicate, atFrame } from "./styxiaDedupe.js";

const point = (name, lon, lat, properties = {}) => ({
  geometry: { type: "Point", coordinates: [lon, lat] },
  properties: { name, ...properties },
});

describe("styxiaDedupe", () => {
  const card = point("Київ (Україна)", 30.62, 50.4, { temp: 7, short: "+7°" });

  it("ховає місто з бази поруч із карткою або з тією ж назвою", () => {
    const free = notDuplicate([card]);
    expect(free(point("Київ", 30.52, 50.45))).toBe(false); // ~9 км, та сама назва
    expect(free(point("Дарниця", 30.63, 50.41))).toBe(false); // ~1 км
    expect(free(point("Бровари", 30.8, 50.51))).toBe(true);
  });

  it("не зливає однойменні далекі села", () => {
    expect(uniquePoints([point("Конотоп", 33.2, 51.24), point("Конотоп", 27.3, 50.1)])).toHaveLength(2);
    expect(uniquePoints([card, point("Київ", 30.52, 50.45)])).toHaveLength(1);
  });

  it("без полів кадру не показує погоду «зараз»", () => {
    const [shifted] = atFrame([card], null, new Date());
    expect(shifted.properties.temp).toBeNull();
    expect(shifted.properties.short).toBe("");
  });
});
