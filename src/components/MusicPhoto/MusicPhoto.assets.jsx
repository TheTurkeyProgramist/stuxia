import songAiKnowledge from "./songAiKnowledge.json";
import faded from "../../media/backgrounds/scenes/resort.webp";
import harmony from "../../media/backgrounds/asium/japanese-temple.webp";
import horse from "../../media/backgrounds/scenes/white-horse.webp";
import theorytwo from "../../media/backgrounds/scenes/black-hole.webp";
import fingerdash from "../../media/third-party/dinofroz/nitseron-castle.webp";
import electrodynamix from "../../media/backgrounds/scenes/thunderstorm.webp";
import deserttwo from "../../media/backgrounds/desert/mirages.webp";
import desertthree from "../../media/backgrounds/desert/cacti.webp";
import desertfour from "../../media/backgrounds/desert/pyramid.webp";
import desertone from "../../media/backgrounds/desert/ships-in-desert.webp";
import unity from "../../media/third-party/music/thefatrat-unity-cover.webp";
import mecha from "../../media/backgrounds/scenes/gears.webp";
import monody from "../../media/third-party/music/thefatrat-monody-cover.webp";
import clubstep from "../../media/backgrounds/scenes/unknown-place.webp";
import turkeys from "../../media/turkeys/kate.webp";
import chess from "../../media/backgrounds/scenes/chess.webp";
import turkeytwo from "../../media/turkeys/small-but-confident.webp";
import turkeythree from "../../media/turkeys/look-me-in-the-eyes.webp";
import turkeyfour from "../../media/turkeys/young-flock-in-yard.webp";
import turkeyfive from "../../media/turkeys/autumn-pen.webp";
import turkeysix from "../../media/turkeys/grown-up.webp";
import turkeysone from "../../media/turkeys/small-flock.webp";
import turkeyseven from "../../media/turkeys/looking-for-a-friend.webp";
import asiumone from "../../media/backgrounds/asium/harmony.webp";
import asiumtwo from "../../media/backgrounds/asium/sakura-field.webp";
import asiumthree from "../../media/backgrounds/asium/cave.webp";
import asiumfour from "../../media/backgrounds/asium/lava-river.webp";
import asiumfive from "../../media/backgrounds/asium/mountain-descent.webp";
import asiumsix from "../../media/backgrounds/asium/treasury.webp";
import asiumten from "../../media/backgrounds/asium/winter-forest.webp";
import asiumeleven from "../../media/backgrounds/asium/waterfall.webp";
import asiumseven from "../../media/backgrounds/asium/japanese-balcony.webp";
import swamptwo from "../../media/backgrounds/swamp/note.webp";
import swampthree from "../../media/backgrounds/swamp/candle-hint.webp";
import swampsix from "../../media/backgrounds/swamp/crystal-cave.webp";
import swampseven from "../../media/backgrounds/swamp/watching-fog.webp";
import swampeight from "../../media/backgrounds/swamp/swamp-dragon.webp";
import swampnine from "../../media/backgrounds/swamp/lake-of-freedom.webp";
import theory from "../../media/backgrounds/scenes/campfire.webp";
import deadlocked from "../../media/backgrounds/swamp/swamp-of-torment.webp";
import horrortwo from "../../media/backgrounds/horror/trap-house.webp";
import horrorthree from "../../media/backgrounds/horror/basement.webp";
import horrorfour from "../../media/backgrounds/horror/evil-garden.webp";
import horror from "../../media/backgrounds/horror/fighting-dog.webp";
import horrorsix from "../../media/backgrounds/horror/escape.webp";
import horroreight from "../../media/backgrounds/horror/escape-finale.webp";
import dinofrozone from "../../media/third-party/dinofroz/emperor-nitseron.webp";
import dinofrozthree from "../../media/third-party/dinofroz/preview.webp";
import dinofrozfour from "../../media/third-party/dinofroz/dragemon-s2.webp";
import dinofrozfive from "../../media/third-party/dinofroz/meltstone.webp";
import dinofrozsix from "../../media/third-party/dinofroz/time-travel.webp";
import dinofrozseven from "../../media/third-party/dinofroz/general-vlad-s1.webp";
import dinofrozeight from "../../media/third-party/dinofroz/general-trick-s1.webp";
import dinofroztwo from "../../media/third-party/dinofroz/general-vlad-s2.webp";
import dinofroznine from "../../media/third-party/dinofroz/rockfroz-view.webp";
import hunger from "../../media/third-party/music/thefatrat-hunger-cover.webp";
import mia from "../../media/third-party/films/mia-and-me.webp";
import silentAudio from "../../mp3/silent.opus";
import silent from "../../media/backgrounds/scenes/foggy-forest.webp";
import dinofrozAudio from "../../mp3/dinofroz.opus";
import monodyAudio from "../../mp3/thefatrat-monody.opus";
import unityAudio from "../../mp3/unity.opus";
import hungerAudio from "../../mp3/thefatrat-hunger.opus";
import theorytwoAudio from "../../mp3/theory-of-everything-ll.opus";
import theoryAudio from "../../mp3/theory-of-everything.opus";
export const assetMap = {
  faded,
  silent,
  silentAudio,
  harmony,
  horse,
  theorytwo,
  fingerdash,
  electrodynamix,
  deserttwo,
  desertthree,
  desertfour,
  desertone,
  unity,
  mecha,
  monody,
  clubstep,
  turkeys,
  chess,
  turkeytwo,
  turkeythree,
  turkeyfour,
  turkeyfive,
  turkeysix,
  turkeysone,
  turkeyseven,
  asiumone,
  asiumtwo,
  asiumthree,
  asiumfour,
  asiumfive,
  asiumsix,
  asiumten,
  asiumeleven,
  asiumseven,
  swamptwo,
  swampthree,
  swampsix,
  swampseven,
  swampeight,
  swampnine,
  theory,
  deadlocked,
  horrortwo,
  horrorthree,
  horrorfour,
  horror,
  horrorsix,
  horroreight,
  dinofrozone,
  dinofrozthree,
  dinofrozfour,
  dinofrozfive,
  dinofrozsix,
  dinofrozseven,
  dinofrozeight,
  dinofroztwo,
  dinofroznine,
  hunger,
  mia,
  dinofrozAudio,
  monodyAudio,
  unityAudio,
  hungerAudio,
  theorytwoAudio,
  theoryAudio,
};

export const musicCards = songAiKnowledge.map((card) => ({
  ...card,
  image: assetMap[card.image] || card.image,
  audio: assetMap[card.audio] || card.audio,
  video: assetMap[card.video] || card.video,
  images: Array.isArray(card.images)
    ? card.images.map((img) => assetMap[img] || img)
    : card.images,
  filters: Array.isArray(card.filters)
    ? card.filters.map((f) => ({
        ...f,
        imageUrl: assetMap[f.imageUrl] || f.imageUrl,
      }))
    : card.filters,
}));

export { songAiKnowledge };
