import i18n from "../../i18n/i18n.js";
// Підказки Декоратора: готові значення CSS з поясненням українською, що вони роблять.
// value — що підставиться в поле, label — пояснення, swatch — показати зразок кольору.

const s = (value, label) => ({
  value,
  get label() {
    return typeof label === "function" ? label() : label;
  },
});

export const COLOR_SUGGESTIONS = [
  s("transparent", () => i18n.t("ui.decoratorSuggestions.prozoryiKolirZnykaie")),
  s("currentColor", () => i18n.t("ui.decoratorSuggestions.iakKolirTekstuElementa")),
  s("inherit", () => i18n.t("ui.decoratorSuggestions.iakUBatkivskohoElementa")),
  s("#ffffff", () => i18n.t("ui.decoratorSuggestions.bilyi")),
  s("#000000", () => i18n.t("ui.decoratorSuggestions.chornyi")),
  s("#ffb36c", () => i18n.t("ui.decoratorSuggestions.pomaranchevyiAktsentDekoratora")),
  s("#60cdff", () => i18n.t("ui.decoratorSuggestions.blakytnyi")),
  s("#22c55e", () => i18n.t("ui.decoratorSuggestions.zelenyi")),
  s("#ef4444", () => i18n.t("ui.decoratorSuggestions.chervonyi")),
  s("#a855f7", () => i18n.t("ui.decoratorSuggestions.fioletovyi")),
  s("#facc15", () => i18n.t("ui.decoratorSuggestions.zhovtyi")),
  s("rgba(0, 0, 0, 0.5)", () => i18n.t("ui.decoratorSuggestions.napivprozoryiChornyiDliaTinei")),
  s("rgba(255, 255, 255, 0.1)", () => i18n.t("ui.decoratorSuggestions.ledPomitnyiBilyiSklianyi")),
].map((item) => Object.assign(item, { swatch: true }));

// Підказки за camelCase-назвою властивості з Декоратора
export const VALUE_SUGGESTIONS = {
  textDecoration: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezLiniiPrybratyPidkreslennia")),
    s("underline", () => i18n.t("ui.decoratorSuggestions.pidkreslennia")),
    s("overline", () => i18n.t("ui.decoratorSuggestions.liniiaNadTekstom")),
    s("line-through", () => i18n.t("ui.decoratorSuggestions.zakreslennia")),
    s("underline wavy", () => i18n.t("ui.decoratorSuggestions.khvyliastaLiniiaZnyzuIak")),
    s("underline dotted", () => i18n.t("ui.decoratorSuggestions.pidkreslenniaKrapkamy")),
    s("underline dashed", () => i18n.t("ui.decoratorSuggestions.pidkreslenniaRyskamy")),
    s("underline double", () => i18n.t("ui.decoratorSuggestions.podviinePidkreslennia")),
    s("underline 2px #ffb36c", () => i18n.t("ui.decoratorSuggestions.tovsteKolorovePidkreslennia")),
  ],
  borderRadius: [
    s("0", () => i18n.t("ui.decoratorSuggestions.hostriKuty")),
    s("4px", () => i18n.t("ui.decoratorSuggestions.ledZaokruhleniKuty")),
    s("8px", () => i18n.t("ui.decoratorSuggestions.pomirnoZaokruhleniKuty")),
    s("16px", () => i18n.t("ui.decoratorSuggestions.sylnoZaokruhleniKuty")),
    s("999px", () => i18n.t("ui.decoratorSuggestions.pihulkaKruhliKraiPo")),
    s("50%", () => i18n.t("ui.decoratorSuggestions.koloAboOval")),
    s("16px 0", () => i18n.t("ui.decoratorSuggestions.zaokruhleniLysheDvaProtylezhni")),
    s("16px 16px 0 0", () => i18n.t("ui.decoratorSuggestions.zaokruhlenyiLysheVerkh")),
  ],
  boxShadow: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezTini")),
    s("0 2px 6px rgba(0,0,0,0.2)", () => i18n.t("ui.decoratorSuggestions.lehkaTinElementTrokhy")),
    s("0 8px 24px rgba(0,0,0,0.35)", () => i18n.t("ui.decoratorSuggestions.hlybokaMiakaTinVysyt")),
    s("0 0 12px #ffb36c", () => i18n.t("ui.decoratorSuggestions.koloroveSvitinniaNavkolo")),
    s("inset 0 2px 6px rgba(0,0,0,0.4)", () => i18n.t("ui.decoratorSuggestions.vnutrishniaTinElementNiby")),
    s("4px 4px 0 #000", () => i18n.t("ui.decoratorSuggestions.tverdaRetroTinBez")),
    s("0 0 0 3px rgba(255,179,108,0.5)", () => i18n.t("ui.decoratorSuggestions.napivprozoreKiltseNavkoloIak")),
  ],
  textShadow: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezTiniTekstu")),
    s("0 1px 2px rgba(0,0,0,0.5)", () => i18n.t("ui.decoratorSuggestions.lehkaTinTekstChytaietsia")),
    s("0 0 8px #ffb36c", () => i18n.t("ui.decoratorSuggestions.svitinniaTekstu")),
    s("0 0 2px #fff, 0 0 10px #0ff", () => i18n.t("ui.decoratorSuggestions.neonPodviineSvitinnia")),
    s("2px 2px 0 #000", () => i18n.t("ui.decoratorSuggestions.tverdaTinIakU")),
    s("1px 1px 0 #fff, -1px -1px 0 #000", () => i18n.t("ui.decoratorSuggestions.obiemnyiTysnenyiTekst")),
  ],
  backdropFilter: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezEfektu")),
    s("blur(4px)", () => i18n.t("ui.decoratorSuggestions.lehkeRozmyttiaTohoShcho")),
    s("blur(12px)", () => i18n.t("ui.decoratorSuggestions.sylneRozmyttiaMatoveSklo")),
    s("blur(10px) saturate(160%)", () => i18n.t("ui.decoratorSuggestions.skloZIaskravishymyKoloramy")),
    s("brightness(0.7)", () => i18n.t("ui.decoratorSuggestions.zatemnytyTeShchoPid")),
    s("grayscale(100%)", () => i18n.t("ui.decoratorSuggestions.zrobytyFonPidElementom")),
  ],
  filter: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezFiltra")),
    s("grayscale(100%)", () => i18n.t("ui.decoratorSuggestions.chornoBilyi")),
    s("sepia(80%)", () => i18n.t("ui.decoratorSuggestions.stareFotoKorychneviVidtinky")),
    s("blur(2px)", () => i18n.t("ui.decoratorSuggestions.rozmytySamElement")),
    s("brightness(1.2)", () => i18n.t("ui.decoratorSuggestions.iaskravishe")),
    s("brightness(0.8)", () => i18n.t("ui.decoratorSuggestions.temnishe")),
    s("contrast(1.4)", () => i18n.t("ui.decoratorSuggestions.kontrastnishe")),
    s("saturate(2)", () => i18n.t("ui.decoratorSuggestions.nasychenishiKolory")),
    s("hue-rotate(90deg)", () => i18n.t("ui.decoratorSuggestions.zmistytyVsiVidtinkyPo")),
    s("invert(1)", () => i18n.t("ui.decoratorSuggestions.invertuvatyKoloryIakNehatyv")),
    s("drop-shadow(0 4px 6px rgba(0,0,0,0.4))", () => i18n.t("ui.decoratorSuggestions.tinPoKonturuI")),
  ],
  transform: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezTransformatsii")),
    s("scale(1.05)", () => i18n.t("ui.decoratorSuggestions.trokhyZbilshyty")),
    s("scale(0.95)", () => i18n.t("ui.decoratorSuggestions.trokhyZmenshyty")),
    s("translateY(-2px)", () => i18n.t("ui.decoratorSuggestions.pidniatyNa2pxDobre")),
    s("rotate(-3deg)", () => i18n.t("ui.decoratorSuggestions.zlehkaNakhylyty")),
    s("rotate(180deg)", () => i18n.t("ui.decoratorSuggestions.perevernutyDohoryDrygom")),
    s("skewX(-8deg)", () => i18n.t("ui.decoratorSuggestions.skosytyVbikIakKursyv")),
    s("perspective(400px) rotateX(10deg)", () => i18n.t("ui.decoratorSuggestions.3dNakhylNazad")),
    s("scaleX(-1)", () => i18n.t("ui.decoratorSuggestions.viddzerkalytyPoHoryzontali")),
  ],
  transformOrigin: [
    s("center", () => i18n.t("ui.decoratorSuggestions.vidTsentruTypovo")),
    s("top left", () => i18n.t("ui.decoratorSuggestions.vidVerkhnohoLivohoKuta")),
    s("top right", () => i18n.t("ui.decoratorSuggestions.vidVerkhnohoPravohoKuta")),
    s("bottom", () => i18n.t("ui.decoratorSuggestions.vidNyzhnohoKraiu")),
    s("50% 100%", () => i18n.t("ui.decoratorSuggestions.vidSeredynyNyzuDlia")),
    s("left", () => i18n.t("ui.decoratorSuggestions.vidLivohoKraiu")),
  ],
  transition: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezPlavnostiZminyMyttievi")),
    s("all 0.2s ease", () => i18n.t("ui.decoratorSuggestions.usiZminyPlavnoZa")),
    s("all 0.4s ease-in-out", () => i18n.t("ui.decoratorSuggestions.povilnisheIMiakshe")),
    s("all 0.4s cubic-bezier(.2,.9,.3,1.4)", () => i18n.t("ui.decoratorSuggestions.pruzhynystoZLehkymPerelotom")),
    s("transform 0.15s ease", () => i18n.t("ui.decoratorSuggestions.plavnoLysheRukhI")),
    s("background 0.3s, color 0.3s", () => i18n.t("ui.decoratorSuggestions.plavnoLysheKolory")),
  ],
  outline: [
    s("none", () => i18n.t("ui.decoratorSuggestions.bezKonturu")),
    s("2px solid #ffb36c", () => i18n.t("ui.decoratorSuggestions.sutsilnyiKolorovyiKontur")),
    s("2px dashed currentColor", () => i18n.t("ui.decoratorSuggestions.shtrykhovyiKonturKoloruTekstu")),
    s("3px double #fff", () => i18n.t("ui.decoratorSuggestions.podviinyiBilyiKontur")),
    s("1px dotted rgba(255,255,255,0.5)", () => i18n.t("ui.decoratorSuggestions.tonkyiPunktyr")),
  ],
};

// Властивості розміщення й видимості: їх зміна легко ламає вигляд сайту або робить його незручним
export const RISKY_PROPS = new Set([
  "width", "height", "min-width", "min-height", "max-width", "max-height",
  "opacity", "display", "visibility", "position", "top", "right", "bottom", "left", "inset",
  "margin", "padding", "font-size", "line-height", "overflow", "z-index", "pointer-events",
  "flex", "flex-direction", "grid-template-columns", "float", "zoom",
  "gap", "row-gap", "column-gap",
]);

const toKebabName = (name) =>
  (name || "").trim().startsWith("--")
    ? (name || "").trim()
    : (name || "").trim().replace(/([A-Z])/g, "-$1").toLowerCase();

export const isRiskyProp = (name) => RISKY_PROPS.has(toKebabName(name));

// «Власний CSS»: властивості з поясненням (⚠ — ризиковані, див. RISKY_PROPS)
const PROPERTY_LIST = [
  s("letter-spacing", () => i18n.t("ui.decoratorSuggestions.vidstanMizhLiteramy")),
  s("word-spacing", () => i18n.t("ui.decoratorSuggestions.vidstanMizhSlovamy")),
  s("line-height", () => i18n.t("ui.decoratorSuggestions.vysotaRiadkaVidstanMizh")),
  s("font-size", () => i18n.t("ui.decoratorSuggestions.rozmirShryftu")),
  s("font-weight", () => i18n.t("ui.decoratorSuggestions.tovshchynaShryftuZhyrnist")),
  s("font-style", () => i18n.t("ui.decoratorSuggestions.kursyvAboZvychainyi")),
  s("font-family", () => i18n.t("ui.decoratorSuggestions.shryft")),
  s("text-transform", () => i18n.t("ui.decoratorSuggestions.velykiMaliAboZ")),
  s("text-align", () => i18n.t("ui.decoratorSuggestions.vyrivniuvanniaTekstu")),
  s("white-space", () => i18n.t("ui.decoratorSuggestions.chyPerenosytyTekstNa")),
  s("padding", () => i18n.t("ui.decoratorSuggestions.vnutrishniiVidstupVidKraiu")),
  s("margin", () => i18n.t("ui.decoratorSuggestions.zovnishniiVidstupVidSusidnikh")),
  s("width", () => i18n.t("ui.decoratorSuggestions.shyryna")),
  s("height", () => i18n.t("ui.decoratorSuggestions.vysota")),
  s("max-width", () => i18n.t("ui.decoratorSuggestions.naibilshaShyryna")),
  s("min-height", () => i18n.t("ui.decoratorSuggestions.naimenshaVysota")),
  s("gap", () => i18n.t("ui.decoratorSuggestions.promizhokMizhVkladenymyElementamy")),
  s("display", () => i18n.t("ui.decoratorSuggestions.iakElementRoztashovuietsiaBlok")),
  s("visibility", () => i18n.t("ui.decoratorSuggestions.skhovatyAleLyshytyMistse")),
  s("z-index", () => i18n.t("ui.decoratorSuggestions.shchoVyshchePryNakladanni")),
  s("background-image", () => i18n.t("ui.decoratorSuggestions.fonovaKartynkaAboHradiient")),
  s("background-size", () => i18n.t("ui.decoratorSuggestions.rozmirFonovoiKartynky")),
  s("mix-blend-mode", () => i18n.t("ui.decoratorSuggestions.zmishuvanniaKolorivZTym")),
  s("clip-path", () => i18n.t("ui.decoratorSuggestions.obrizatyElementUFihuru")),
  s("aspect-ratio", () => i18n.t("ui.decoratorSuggestions.proportsiiStorin")),
  s("overflow", () => i18n.t("ui.decoratorSuggestions.shchoRobytyZVmistom")),
  s("pointer-events", () => i18n.t("ui.decoratorSuggestions.chyReahuieElementNa")),
  s("user-select", () => i18n.t("ui.decoratorSuggestions.chyMozhnaVydilytyTekst")),
  s("accent-color", () => i18n.t("ui.decoratorSuggestions.kolirHalochokPeremykachivI")),
  s("caret-color", () => i18n.t("ui.decoratorSuggestions.kolirKursoraVvedenniaTekstu")),
  s("outline-offset", () => i18n.t("ui.decoratorSuggestions.vidstupKonturuVidKraiu")),
  s("animation", () => i18n.t("ui.decoratorSuggestions.animatsiiaZKliuchovymyKadramy")),
  s("opacity", () => i18n.t("ui.decoratorSuggestions.prozoristUsohoElementa1")),
  s("min-width", () => i18n.t("ui.decoratorSuggestions.naimenshaShyryna")),
  s("max-height", () => i18n.t("ui.decoratorSuggestions.naibilshaVysota")),
  s("position", () => i18n.t("ui.decoratorSuggestions.sposibRoztashuvanniaRelativeAbsolute")),
];

export const PROPERTY_SUGGESTIONS = PROPERTY_LIST.map((item) =>
  RISKY_PROPS.has(item.value) ? { ...item, risky: true } : item,
);

// Значення для властивостей із «Власного CSS» (kebab-case)
export const CUSTOM_VALUE_SUGGESTIONS = {
  get "letter-spacing"() { return [s("0.5px", i18n.t("ui.decoratorSuggestions.trokhyShyrshe")), s("2px", i18n.t("ui.decoratorSuggestions.rozridzheno")), s("-0.5px", i18n.t("ui.decoratorSuggestions.shchilnishe"))]; },
  get "word-spacing"() { return [s("4px", i18n.t("ui.decoratorSuggestions.shyrsheMizhSlovamy")), s("-2px", i18n.t("ui.decoratorSuggestions.shchilnishe"))]; },
  get "line-height"() { return [s("1", i18n.t("ui.decoratorSuggestions.shchilnoBezPromizhkiv")), s("1.5", i18n.t("ui.decoratorSuggestions.zruchnoDliaChytannia")), s("2", i18n.t("ui.decoratorSuggestions.prostoro"))]; },
  get "font-size"() { return [s("12px", i18n.t("ui.decoratorSuggestions.dribnyi")), s("16px", i18n.t("ui.decoratorSuggestions.zvychainyi")), s("20px", i18n.t("ui.decoratorSuggestions.velykyi")), s("1.5em", i18n.t("ui.decoratorSuggestions.u15Raza"))]; },
  get "font-weight"() { return [s("300", i18n.t("ui.decoratorSuggestions.tonkyi")), s("400", i18n.t("ui.decoratorSuggestions.zvychainyi")), s("600", i18n.t("ui.decoratorSuggestions.napivzhyrnyi")), s("800", i18n.t("ui.decoratorSuggestions.duzheZhyrnyi"))]; },
  get "font-style"() { return [s("italic", i18n.t("ui.decoratorSuggestions.kursyv")), s("normal", i18n.t("ui.decoratorSuggestions.zvychainyi"))]; },
  get "font-family"() { return [s("monospace", i18n.t("ui.decoratorSuggestions.monoshyrynnyiIakKod")), s("serif", i18n.t("ui.decoratorSuggestions.zZasichkamyIakU")), s("cursive", i18n.t("ui.decoratorSuggestions.rukopysnyi"))]; },
  get "text-transform"() { return [s("uppercase", i18n.t("ui.decoratorSuggestions.usiVelyki")), s("lowercase", i18n.t("ui.decoratorSuggestions.usiMali")), s("capitalize", i18n.t("ui.decoratorSuggestions.kozhneSlovoZVelykoi")), s("none", i18n.t("ui.decoratorSuggestions.iakNapysano"))]; },
  get "text-align"() { return [s("left", i18n.t("ui.decoratorSuggestions.livoruch")), s("center", i18n.t("ui.decoratorSuggestions.poTsentru")), s("right", i18n.t("ui.decoratorSuggestions.pravoruch")), s("justify", i18n.t("ui.decoratorSuggestions.poShyryni"))]; },
  get "white-space"() { return [s("nowrap", i18n.t("ui.decoratorSuggestions.nePerenosytyVOdyn")), s("normal", i18n.t("ui.decoratorSuggestions.perenosytyIakZvychaino"))]; },
  get padding() { return [s("4px 8px", i18n.t("ui.decoratorSuggestions.kompaktno")), s("8px 16px", i18n.t("ui.decoratorSuggestions.iakUKnopky")), s("16px", i18n.t("ui.decoratorSuggestions.prostoroZUsikhBokiv"))]; },
  get margin() { return [s("0", i18n.t("ui.decoratorSuggestions.bezVidstupiv")), s("8px", i18n.t("ui.decoratorSuggestions.nevelykyiVidstup")), s("0 auto", i18n.t("ui.decoratorSuggestions.vyrivniatyBlokPoTsentru"))]; },
  get width() { return [s("100%", i18n.t("ui.decoratorSuggestions.naVsiuShyrynu")), s("auto", i18n.t("ui.decoratorSuggestions.zaVmistom")), s("fit-content", i18n.t("ui.decoratorSuggestions.rivnoPidVmist"))]; },
  get height() { return [s("auto", i18n.t("ui.decoratorSuggestions.zaVmistom")), s("100%", i18n.t("ui.decoratorSuggestions.naVsiuVysotuBatka"))]; },
  get "max-width"() { return [s("600px", i18n.t("ui.decoratorSuggestions.neShyrsheZa600px")), s("100%", i18n.t("ui.decoratorSuggestions.neVykhodytyZaBatka"))]; },
  get "min-height"() { return [s("40px", i18n.t("ui.decoratorSuggestions.neNyzhcheZa40px")), s("100vh", i18n.t("ui.decoratorSuggestions.neNyzhcheZaEkran"))]; },
  get gap() { return [s("4px", i18n.t("ui.decoratorSuggestions.shchilno")), s("8px", i18n.t("ui.decoratorSuggestions.zvychaino")), s("16px", i18n.t("ui.decoratorSuggestions.prostoro"))]; },
  get display() { return [s("none", i18n.t("ui.decoratorSuggestions.skhovatyPovnistiu")), s("block", i18n.t("ui.decoratorSuggestions.blokNaVsiuShyrynu")), s("inline-block", i18n.t("ui.decoratorSuggestions.uRiadkuAleZ")), s("flex", i18n.t("ui.decoratorSuggestions.hnuchkyiRiad")), s("grid", i18n.t("ui.decoratorSuggestions.sitka"))]; },
  get visibility() { return [s("hidden", i18n.t("ui.decoratorSuggestions.nevydymyiAleMistseLyshaietsia")), s("visible", i18n.t("ui.decoratorSuggestions.vydymyi"))]; },
  get "z-index"() { return [s("1", i18n.t("ui.decoratorSuggestions.trokhyVyshcheZaSusidiv")), s("10", i18n.t("ui.decoratorSuggestions.vyshche")), s("-1", i18n.t("ui.decoratorSuggestions.pidSusidamy"))]; },
  get "background-image"() { return [s("linear-gradient(135deg, #ffb36c, #a855f7)", i18n.t("ui.decoratorSuggestions.hradiientZPomaranchevohoU")), s("radial-gradient(circle, #60cdff, transparent)", i18n.t("ui.decoratorSuggestions.kruhleSiaivo")), s("none", i18n.t("ui.decoratorSuggestions.bezKartynky"))]; },
  get "background-size"() { return [s("cover", i18n.t("ui.decoratorSuggestions.zapovnytyObrizavshyZaive")), s("contain", i18n.t("ui.decoratorSuggestions.vmistytyPovnistiu")), s("200% 200%", i18n.t("ui.decoratorSuggestions.udvichiBilshyiDliaAnimatsii"))]; },
  get "mix-blend-mode"() { return [s("multiply", i18n.t("ui.decoratorSuggestions.mnozhenniaTemnishe")), s("screen", i18n.t("ui.decoratorSuggestions.osvitlennia")), s("overlay", i18n.t("ui.decoratorSuggestions.nakladanniaKontrastno")), s("difference", i18n.t("ui.decoratorSuggestions.riznytsiaInversiiaPoFonu")), s("normal", i18n.t("ui.decoratorSuggestions.zvychaino"))]; },
  get "clip-path"() { return [s("circle(50%)", i18n.t("ui.decoratorSuggestions.kolo")), s("polygon(50% 0, 100% 100%, 0 100%)", i18n.t("ui.decoratorSuggestions.trykutnyk")), s("inset(0 round 12px)", i18n.t("ui.decoratorSuggestions.zaokruhlenyiPriamokutnyk")), s("none", i18n.t("ui.decoratorSuggestions.bezObrizannia"))]; },
  get "aspect-ratio"() { return [s("1", i18n.t("ui.decoratorSuggestions.kvadrat")), s("16 / 9", i18n.t("ui.decoratorSuggestions.iakVideo")), s("4 / 3", i18n.t("ui.decoratorSuggestions.iakStaryiEkran"))]; },
  get overflow() { return [s("hidden", i18n.t("ui.decoratorSuggestions.obrizatyZaive")), s("auto", i18n.t("ui.decoratorSuggestions.prokrutkaKolyNeVlazyt")), s("visible", i18n.t("ui.decoratorSuggestions.pokazuvatyVse"))]; },
  get "pointer-events"() { return [s("none", i18n.t("ui.decoratorSuggestions.neReahuvatyNaMyshku")), s("auto", i18n.t("ui.decoratorSuggestions.iakZvychaino"))]; },
  get "user-select"() { return [s("none", i18n.t("ui.decoratorSuggestions.zaboronytyVydilenniaTekstu")), s("all", i18n.t("ui.decoratorSuggestions.vydiliatyVseOdnymKlikom")), s("text", i18n.t("ui.decoratorSuggestions.iakZvychaino"))]; },
  "accent-color": COLOR_SUGGESTIONS,
  "caret-color": COLOR_SUGGESTIONS,
  get "outline-offset"() { return [s("2px", i18n.t("ui.decoratorSuggestions.konturTrokhyVidstupaieVid")), s("-4px", i18n.t("ui.decoratorSuggestions.konturUseredyniElementa"))]; },
  get animation() { return [s("none", i18n.t("ui.decoratorSuggestions.bezAnimatsii"))]; },
  opacity: [
    s("1", () => i18n.t("ui.decoratorSuggestions.povnistiuVydymyiTypovo")),
    s("0.85", () => i18n.t("ui.decoratorSuggestions.ledProzoryi")),
    s("0.5", () => i18n.t("ui.decoratorSuggestions.napivprozoryi")),
    s("0.2", () => i18n.t("ui.decoratorSuggestions.maizheProzoryiTekstVazhko")),
    s("0", () => i18n.t("ui.decoratorSuggestions.nevydymyiElementZnykneI")),
  ],
  get "min-width"() { return [s("120px", i18n.t("ui.decoratorSuggestions.neVuzhcheZa120px")), s("0", i18n.t("ui.decoratorSuggestions.bezObmezhennia"))]; },
  get "max-height"() { return [s("300px", i18n.t("ui.decoratorSuggestions.neVyshcheZa300px")), s("none", i18n.t("ui.decoratorSuggestions.bezObmezhennia"))]; },
  position: [
    s("relative", () => i18n.t("ui.decoratorSuggestions.vidnosnoSvohoMistsiaBezpechno")),
    s("sticky", () => i18n.t("ui.decoratorSuggestions.prylypaiePidChasProkrutky")),
    s("absolute", () => i18n.t("ui.decoratorSuggestions.vyrvatyZPotokuSusidy")),
    s("static", () => i18n.t("ui.decoratorSuggestions.zvychaineRoztashuvannia")),
  ],
};

// Готові градієнти для «Градієнта фону»
export const GRADIENT_SUGGESTIONS = [
  s("linear-gradient(135deg, #ffb36c, #a855f7)", () => i18n.t("ui.decoratorSuggestions.zakhidSontsiaPomaranchevyiFioletovyi")),
  s("linear-gradient(180deg, #60cdff, #1e3a8a)", () => i18n.t("ui.decoratorSuggestions.okeanBlakytnyiZverkhuSynii")),
  s("linear-gradient(90deg, #22c55e, #facc15)", () => i18n.t("ui.decoratorSuggestions.litoZelenyiZhovtyiZliva")),
  s("linear-gradient(135deg, #ff00cc, #3333ff)", () => i18n.t("ui.decoratorSuggestions.neonRozhevyiSynii")),
  s("linear-gradient(180deg, rgba(255,255,255,0.15), transparent)", () => i18n.t("ui.decoratorSuggestions.sklianyiVidblyskZverkhu")),
  s("linear-gradient(90deg, transparent, rgba(0,0,0,0.6))", () => i18n.t("ui.decoratorSuggestions.zatemnenniaPravoruchPidTekst")),
  s("radial-gradient(circle, #60cdff, transparent)", () => i18n.t("ui.decoratorSuggestions.kruhleSiaivoZTsentru")),
  s("linear-gradient(135deg, #ffb36c 0%, #ef4444 50%, #a855f7 100%)", () => i18n.t("ui.decoratorSuggestions.tryKoloryZPozytsiiamy")),
  s("none", () => i18n.t("ui.decoratorSuggestions.bezHradiienta")),
];

const toKebab = (name) =>
  name.startsWith("--") ? name : name.replace(/([A-Z])/g, "-$1").toLowerCase();

// Розмиття (blur) перемальовує все під елементом щокадру — на слабких пристроях сайт гальмує
export const isSlowValue = (value) => /blur\(/i.test(value || "");

const markSlow = (list) => list.map((item) => (isSlowValue(item.value) ? { ...item, slow: true } : item));
Object.keys(VALUE_SUGGESTIONS).forEach((key) => {
  VALUE_SUGGESTIONS[key] = markSlow(VALUE_SUGGESTIONS[key]);
});
Object.keys(CUSTOM_VALUE_SUGGESTIONS).forEach((key) => {
  CUSTOM_VALUE_SUGGESTIONS[key] = markSlow(CUSTOM_VALUE_SUGGESTIONS[key]);
});

// Підказки значень для будь-якої властивості (camelCase або kebab-case)
export const suggestionsFor = (prop) =>
  VALUE_SUGGESTIONS[prop] || CUSTOM_VALUE_SUGGESTIONS[toKebab(prop || "")] || [];
