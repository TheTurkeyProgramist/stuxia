import prisonVideo from "../../media/backgrounds/scenes/crystal-prison.webp";
import mountains from "../../media/backgrounds/scenes/mountains.webp";
import art from "../../media/backgrounds/scenes/art-studio.webp";
import penny from "../../media/third-party/films/pennywise-it-2017.webp";
import hills from "../../media/backgrounds/scenes/foggy-forest.webp";
import turkeyStudioForest from "../../media/backgrounds/scenes/foggy-forest-loader.webp";
import hillsVideo from "../../media/videos/foggy-forest.webm";
import dinofrozVideo from "../../media/third-party/dinofroz/emperor-nitseron.webm";
import harmony from "../../media/backgrounds/asium/japanese-temple.webp";
import theorytwo from "../../media/backgrounds/scenes/black-hole.webp";
import theoryVideo from "../../media/videos/campfire.webm";
import fingerdash from "../../media/third-party/dinofroz/nitseron-castle.webp";
import electrodynamix from "../../media/backgrounds/scenes/thunderstorm.webp";
import sirenhead from "../../media/fan-art/siren-head.webp"
import backrooms from "../../media/backgrounds/scenes/backrooms.webp"
// Desert
import desertthree from "../../media/backgrounds/desert/cacti.webp";
import desertone from "../../media/backgrounds/desert/ships-in-desert.webp";
import mecha from "../../media/backgrounds/scenes/gears.webp";
import clubstep from "../../media/backgrounds/scenes/unknown-place.webp";
import turkeys from "../../media/turkeys/kate.webp";
// Horses
import chess from "../../media/backgrounds/scenes/chess.webp";
// Turkeys
import aurorahills from "../../media/third-party/games/aurora-hills.webp";
import turkeytwo from "../../media/turkeys/small-but-confident.webp";
import turkeythree from "../../media/turkeys/look-me-in-the-eyes.webp";
import turkeysix from "../../media/turkeys/grown-up.webp";
import turkeysone from "../../media/turkeys/small-flock.webp";
import turkeyseven from "../../media/turkeys/looking-for-a-friend.webp";
// Asium
import asiumtwo from "../../media/backgrounds/asium/sakura-field.webp";
import asiumthree from "../../media/backgrounds/asium/cave.webp";
import asiumfour from "../../media/backgrounds/asium/lava-river.webp";
import asiumfive from "../../media/backgrounds/asium/mountain-descent.webp";
import asiumsix from "../../media/backgrounds/asium/treasury.webp";
import asiumten from "../../media/backgrounds/asium/winter-forest.webp";
import asiumeleven from "../../media/backgrounds/asium/waterfall.webp";
import asiumseven from "../../media/backgrounds/asium/japanese-balcony.webp";
// Swamp
import swamptwo from "../../media/backgrounds/swamp/note.webp";
import swampthree from "../../media/backgrounds/swamp/candle-hint.webp";
import swampsix from "../../media/backgrounds/swamp/crystal-cave.webp";
import swampseven from "../../media/backgrounds/swamp/watching-fog.webp";
import swampeight from "../../media/backgrounds/swamp/swamp-dragon.webp";
import swampnine from "../../media/backgrounds/swamp/lake-of-freedom.webp";
import theory from "../../media/backgrounds/scenes/campfire.webp";
import deadlocked from "../../media/backgrounds/swamp/swamp-of-torment.webp";
// Horror
import horror from "../../media/backgrounds/scenes/fighting-dog.webp";
// Дракони
import dinofrozone from "../../media/third-party/dinofroz/emperor-nitseron.webp";
import dinofrozthree from "../../media/third-party/dinofroz/preview.webp";
import dinofrozfour from "../../media/third-party/dinofroz/dragemon-s2.webp";
import dinofrozfive from "../../media/third-party/dinofroz/meltstone.webp";
import dinofrozsix from "../../media/third-party/dinofroz/time-travel.webp";
import dinofrozseven from "../../media/third-party/dinofroz/general-vlad-s1.webp";
import dinofrozeight from "../../media/third-party/dinofroz/general-trick-s1.webp";
import dinofroztwo from "../../media/third-party/dinofroz/general-vlad-s2.webp";
import dinofroznine from "../../media/third-party/dinofroz/rockfroz-view.webp";
import nicerone from "../../media/third-party/dinofroz/nitseron-alt.webp";
import village from "../../media/third-party/games/dragon-village-3.webp";
import daysVideo from "../../media/third-party/films/the-ring.webp";
import vladOneVideo from "../../media/third-party/dinofroz/general-vlad-s1.webm";
// Mia and me
import faded from "../../media/backgrounds/scenes/resort.webp";
import mia from "../../media/third-party/films/mia-and-me.webp";
import volcano from "../../media/backgrounds/scenes/volcano.webp";
import clubstepVideo from "../../media/videos/unknown-place.webm";
// Pesimistic future
import titanic from "../../media/third-party/films/titanic.webp";
import smit from "../../media/third-party/films/agent-smith-matrix.webp";
import electrodynamixVideo from "../../media/videos/thunderstorm.webm";
import volcanoVideo from "../../media/videos/volcano.webm";
import whitesound from "../../media/videos/white-noise.webm";
import loft from "../../media/backgrounds/scenes/loft.webp";
import secret from "../../media/backgrounds/scenes/egyptian-hieroglyphs.webp";
import slivkishow from "../../media/third-party/youtube/slivkishow-cookie-flight.webp";
import iceage from "../../media/third-party/films/the-day-after-tomorrow.webp";
import i18n from "../../i18n/i18n.js";
// Фон головної, поки користувач не обрав свій (і заглушка, якщо обраний не завантажився)
export const DEFAULT_HERO_BG = turkeyStudioForest;

// Фото з написом по центру: на телефоні показуємо цілим (contain), а порожні смуги
// заповнює розмита копія — як колись на заставці завантаження. Інакше напис обрізається
export const MOBILE_CONTAIN_BGS = new Set([turkeyStudioForest]);

export const DEFAULT_BGS = [
  {
    src: sirenhead,
    get name() { return i18n.t("ui.defaultBgs.shchosNeTak"); },
    category: "Темрява та Містика",
    get author() { return i18n.t("ui.defaultBgs.trevorKhenderson"); },
  },
  {
    src: secret,
    get name() { return i18n.t("ui.defaultBgs.iehypetskiIierohlify"); },
    category: "Фентезі та Легенди",
    author: "TheTurkeyStudio",
  },
  
  {
    src: desertone,
    get name() { return i18n.t("ui.defaultBgs.korabliUPusteli"); },
    category: "Фентезі та Легенди",
    get author() { return i18n.t("ui.defaultBgs.heneratsiiaShiGemini"); },
  },
  {
    src: iceage,
    get name() { return i18n.t("ui.defaultBgs.kryzhanaKatastrofa"); },
    category: "Природа та Стихії",
    author: "20th Century Fox",
    get source() { return i18n.t("ui.defaultBgs.filmPisliazavtra"); },
    start: 0,
    end: 300,
  },
  {
    src: turkeyStudioForest,
    get name() { return i18n.t("ui.defaultBgs.lisTheturkeystudio"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: hills,
    get name() { return i18n.t("ui.defaultBgs.tumannyiLis"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: hillsVideo,
    get name() { return i18n.t("ui.defaultBgs.tumannyiLisVideo"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
    start: 0,
    end: 300,
  },
  {
    src: faded,
    get name() { return i18n.t("ui.defaultBgs.kurort"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: slivkishow,
    get name() { return i18n.t("ui.defaultBgs.politKukiUStratosferu"); },
    category: "Природа та Стихії",
    author: "SlivkiShow",
    start: 0,
    end: 78,
  },
  {
    src: art,
    get name() { return i18n.t("ui.defaultBgs.khudozhniaStudiia"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: electrodynamixVideo,
    get name() { return i18n.t("ui.defaultBgs.hrozaVideo"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
    start: 0,
    end: 7,
  },
  {
    src: mountains,
    get name() { return i18n.t("ui.defaultBgs.hory"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: volcano,
    get name() { return i18n.t("ui.defaultBgs.vulkan"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: volcanoVideo,
    get name() { return i18n.t("ui.defaultBgs.vulkanVideo"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
    start: 0,
    end: 300,
  },
  {
    src: aurorahills,
    get name() { return i18n.t("ui.defaultBgs.avroraHills"); },
    category: "Темрява та Містика",
    author: "NovaSoft Interactive",
  },
  {
    src: swampseven,
    get name() { return i18n.t("ui.defaultBgs.tumanShchoDyvytsia"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: prisonVideo,
    get name() { return i18n.t("ui.defaultBgs.kryshtalevaViaznytsia"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
    start: 0,
    end: 300,
  },
  {
    src: loft,
    get name() { return i18n.t("ui.defaultBgs.stylLoft"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: whitesound,
    get name() { return i18n.t("ui.defaultBgs.bilyiShum"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
    start: 0,
    end: 300,
  },
  // Світ Динофроз та Дракони
  {
    src: dinofrozVideo,
    get name() { return i18n.t("ui.defaultBgs.imperatorNeseronVideo"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
    start: 0,
    end: 300,
  },
  {
    src: vladOneVideo,
    get name() { return i18n.t("ui.defaultBgs.heneralVladVideoSezon"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
    start: 0,
    end: 300,
  },
  {
    src: village,
    get name() { return i18n.t("ui.defaultBgs.drevniusIDarknis"); },
    category: "Фентезі та Легенди",
    author: "highbrow",
    source: "Dragon Village 3",
  },
  {
    src: dinofrozone,
    get name() { return i18n.t("ui.defaultBgs.imperatorNeseron"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofroztwo,
    get name() { return i18n.t("ui.defaultBgs.heneralVlad2Sezon"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofrozthree,
    get name() { return i18n.t("ui.defaultBgs.previuMultfilmu"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofrozfour,
    get name() { return i18n.t("ui.defaultBgs.drahemon2Sezon"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofrozfive,
    get name() { return i18n.t("ui.defaultBgs.meltston"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofrozsix,
    get name() { return i18n.t("ui.defaultBgs.peremishchenniaUChasi"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofrozseven,
    get name() { return i18n.t("ui.defaultBgs.heneralVlad1Sezon"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofrozeight,
    get name() { return i18n.t("ui.defaultBgs.heneralTrik1Sezon"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: dinofroznine,
    get name() { return i18n.t("ui.defaultBgs.pohliadURokfroz"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: fingerdash,
    get name() { return i18n.t("ui.defaultBgs.zamokNeserona"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  {
    src: nicerone,
    get name() { return i18n.t("ui.defaultBgs.ishcheVariant"); },
    category: "Фентезі та Легенди",
    author: "Mondo TV",
    get source() { return i18n.t("ui.defaultBgs.mSDynofroz"); },
  },
  // Тварини та Істоти (Індики, Коні)
  {
    src: turkeys,
    get name() { return i18n.t("ui.defaultBgs.indychkaKeit"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: turkeysone,
    get name() { return i18n.t("ui.defaultBgs.maleBundiucheStado"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: turkeytwo,
    get name() { return i18n.t("ui.defaultBgs.malyiAleVpevnenyi"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: turkeythree,
    get name() { return i18n.t("ui.defaultBgs.dyvysMeniVOchi"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: turkeysix,
    get name() { return i18n.t("ui.defaultBgs.myVzheVyrosly"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: turkeyseven,
    get name() { return i18n.t("ui.defaultBgs.shukaiuDruha"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  // Природа та Локації (Пустеля, Болото, Азіум)
  {
    src: backrooms,
    get name() { return i18n.t("ui.defaultBgs.neskinchennyiKorydor"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: desertthree,
    get name() { return i18n.t("ui.defaultBgs.kaktusy"); },
    category: "Природа та Стихії",
    get author() { return i18n.t("ui.defaultBgs.heneratsiiaShiGemini"); },
  },
  {
    src: swampnine,
    get name() { return i18n.t("ui.defaultBgs.ozeroVoli"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: swamptwo,
    get name() { return i18n.t("ui.defaultBgs.zapyska"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumten,
    get name() { return i18n.t("ui.defaultBgs.zymovyiLis"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumeleven,
    get name() { return i18n.t("ui.defaultBgs.vodospad"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  // Містичні та Казкові місця
  {
    src: asiumtwo,
    get name() { return i18n.t("ui.defaultBgs.poleISakury"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumthree,
    get name() { return i18n.t("ui.defaultBgs.pechera"); },
    category: "Фентезі та Легенди",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumfour,
    get name() { return i18n.t("ui.defaultBgs.richkaZLavy"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumfive,
    get name() { return i18n.t("ui.defaultBgs.spuskZHory"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumsix,
    get name() { return i18n.t("ui.defaultBgs.skarbnytsiaVidsylky"); },
    category: "Фентезі та Легенди",
    author: "TheTurkeyStudio",
  },
  {
    src: asiumseven,
    get name() { return i18n.t("ui.defaultBgs.iaponskyiBalkon"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: harmony,
    get name() { return i18n.t("ui.defaultBgs.iaponskyiKhram"); },
    category: "Фентезі та Легенди",
    author: "TheTurkeyStudio",
  },
  {
    src: mia,
    get name() { return i18n.t("ui.defaultBgs.miaTaIa"); },
    category: "Фентезі та Легенди",
    author: "Studio 100 Media, Lucky Punch, March Ent.",
    get source() { return i18n.t("ui.defaultBgs.mSMiaAnd"); },
  },
  // Хоррор та Болото (Темна тематика)
  {
    src: horror,
    get name() { return i18n.t("ui.defaultBgs.biitsivskaSobaka"); },
    category: "Темрява та Містика",
    get author() { return i18n.t("ui.defaultBgs.heneratsiiaShiGemini2"); },
  },
  {
    src: daysVideo,
    get name() { return i18n.t("ui.defaultBgs.kasetaShchoVbyvaie"); },
    category: "Темрява та Містика",
    author: "Dreamworks",
    get source() { return i18n.t("ui.defaultBgs.filmDzvinok"); },
    start: 0,
    end: 300,
  },
  {
    src: swampeight,
    get name() { return i18n.t("ui.defaultBgs.bolotnyiDrakon"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  { src: penny, get name() { return i18n.t("ui.defaultBgs.pennivaiz"); }, category: "Темрява та Містика", author: "Warner Bros. / New Line Cinema", get source() { return i18n.t("ui.defaultBgs.filmVono2017"); } },
  {
    src: deadlocked,
    get name() { return i18n.t("ui.defaultBgs.bolotoMuk"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  // Ігри та Техно
  {
    src: theorytwo,
    get name() { return i18n.t("ui.defaultBgs.chornaDira"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: electrodynamix,
    get name() { return i18n.t("ui.defaultBgs.hroza"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: mecha,
    get name() { return i18n.t("ui.defaultBgs.shesterni"); },
    category: "Фентезі та Легенди",
    author: "TheTurkeyStudio",
  },
  {
    src: clubstepVideo,
    get name() { return i18n.t("ui.defaultBgs.nevidomeMistseVideo"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
    start: 0,
    end: 300,
  },
  {
    src: clubstep,
    get name() { return i18n.t("ui.defaultBgs.nevidomeMistse"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: theory,
    get name() { return i18n.t("ui.defaultBgs.vohnyshche"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
  },
  {
    src: theoryVideo,
    get name() { return i18n.t("ui.defaultBgs.vohnyshcheVideo"); },
    category: "Природа та Стихії",
    author: "TheTurkeyStudio",
    start: 0,
    end: 300,
  },
  { src: chess, get name() { return i18n.t("ui.defaultBgs.shakhy"); }, category: "Природа та Стихії", author: "TheTurkeyStudio" },
  {
    src: swampthree,
    get name() { return i18n.t("ui.defaultBgs.pidkazkaSvichky"); },
    category: "Темрява та Містика",
    author: "TheTurkeyStudio",
  },
  {
    src: swampsix,
    get name() { return i18n.t("ui.defaultBgs.pecheraKrystaliv"); },
    category: "Фентезі та Легенди",
    author: "TheTurkeyStudio",
  },
  // Трагедія та Драматичні сюжети
  {
    src: titanic,
    get name() { return i18n.t("ui.defaultBgs.tytanik"); },
    category: "Темрява та Містика",
    author: "Paramount Pictures & 20th Century",
    get source() { return i18n.t("ui.defaultBgs.filmTitanic1997"); },
  },
  {
    src: smit,
    get name() { return i18n.t("ui.defaultBgs.ahentSmit"); },
    category: "Темрява та Містика",
    author: "WarnerBrothers",
    get source() { return i18n.t("ui.defaultBgs.filmMatrytsia"); },
  },
];