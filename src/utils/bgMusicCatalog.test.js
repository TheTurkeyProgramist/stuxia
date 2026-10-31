import { BASE_BG_TRACKS, getAvailableTrackCatalog, isBaseBgTrack } from "./bgMusicCatalog";

describe("bgMusicCatalog", () => {
  it("keeps every built-in track available even when omitted from the UI state", () => {
    const catalog = getAvailableTrackCatalog([]);
    BASE_BG_TRACKS.forEach((track) => {
      expect(isBaseBgTrack(track.file)).toBe(true);
      expect(catalog).toContainEqual(track);
    });
  });

  it("adds extra tracks and drops invalid ones", () => {
    const extra = { id: 900, name: "Custom", file: "custom.opus" };
    const catalog = getAvailableTrackCatalog([extra, null, { id: 901, name: "No file" }]);
    expect(catalog).toContainEqual(extra);
    expect(catalog).toHaveLength(BASE_BG_TRACKS.length + 1);
    expect(getAvailableTrackCatalog("not an array")).toEqual(BASE_BG_TRACKS);
  });

  it("does not treat empty or unknown files as built-in", () => {
    expect(isBaseBgTrack("")).toBe(false);
    expect(isBaseBgTrack(undefined)).toBe(false);
    expect(isBaseBgTrack("custom.opus")).toBe(false);
  });
});
