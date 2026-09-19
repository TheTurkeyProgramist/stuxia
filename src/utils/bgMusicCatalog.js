
export const BASE_BG_TRACKS = [
];

export const BASE_BG_TRACK_FILE_SET = new Set(
  BASE_BG_TRACKS.map((track) => track.file),
);

export const isBaseBgTrack = (file) => !!file && BASE_BG_TRACK_FILE_SET.has(file);

export const getAvailableTrackCatalog = (extraTracks = []) => {
  const safeExtraTracks = Array.isArray(extraTracks) ? extraTracks : [];

  return [
    ...BASE_BG_TRACKS,
    ...safeExtraTracks.filter(
      (track) => track && track.file && !isBaseBgTrack(track.file),
    ),
  ];
};

export const BG_CACHE_NAME = "bg-audio-cache";

export const isCacheApiSupported = () => typeof window !== "undefined" && "caches" in window;

export const getStoredSoftDeletedIds = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem("bg_music_soft_deleted_ids");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const persistSoftDeletedIds = (ids = []) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      "bg_music_soft_deleted_ids",
      JSON.stringify(Array.from(new Set(ids))),
    );
  } catch {
    // ignore storage issues gracefully
  }
};
