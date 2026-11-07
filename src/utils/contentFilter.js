//Дискмейлер:
//Цей модуль містить регулярні вирази для модерації контенту, які включають ненормативну лексику,
//вульгаризми та політичні терміни. Файл призначений виключно для технічної фільтрації чату/коментарів.
//А також слова для новин, щоб вони не псували вам день...
//І чому новини завжди такі дебільні....         :(

//Для розробників:
//Проскрольте до рядка 200, якщо ви хочете на свій сайт зробити фільтр новин
//Пишіть, якщо якась погана новина пройшла
//Примітка: Добре захищає від українських політичних джерел новин (ТСН, УНІАН), але не міжнародних (BBC, Fox News)





























































































































































































import { getPref, setPref } from "./prefsStore.js";

// Мітка групи: усі шаблони після неї (до наступної мітки) належать до цієї категорії.
// Категорії описані в NEWS_FILTER_CATEGORIES нижче — їх можна вмикати/вимикати в налаштуваннях.
const group = (key) => ({ group: key });

const RAW_PATTERNS = [
  // ==========================================
  // 1. ВІЙНА, СИЛОВИКИ ТА АТАКИ
  // ==========================================
  group("war"),
  /війн(?:а|и|ою|і|нах)/iu,
  /бойов(?:і|их|им|ий|а|ої)/iu,
  /конфлікт(?:у|и|ів|ом)?/iu,
  /(?<!\p{L})фронт(?:у|і|ом)?(?!\p{L})/iu,
  /(?<!\p{L})атак(?:а|и|у|ою|ам|ах|ув\p{L}*)/iu,
  /обстріл(?:у|и|ів|ом|ами)?/iu,
  /безпілотник(?:и|ів|ами|ом)?|(?<!\p{L})дрон(?:и|ів|ами|а|у|ом)?(?!\p{L})|(?<!\p{L})бпла(?!\p{L})/iu,
  /загибл(?:ий|их|і|им|ними)/iu,
  /поранен(?:ий|их|і|им|ними)/iu,
  /руйнуванн(?:я|ь|ям)/iu,
  /військов(?:ий|і|их|им|ними|е|а|ого)/iu,
  /(?<!\p{L})армі(?:я|ї|ю|єю)/iu,
  /окупант(?:и|ів|ами)?|агресор(?:и|ів)?/iu,
  /ракет(?:а|и|ний|них|ами)/iu,
  /збройн(?:і|их)\s+сил(?:и|)/iu,
  /(?<!\p{L})(?:тцк|зсу|сбу|дбр|єрдр)(?!\p{L})/iu,
  /(?<!\p{L})рф(?!\p{L})|росі(?:я|ї|єю|йськ.*)/iu,

  // ==========================================
  // 2. ПОЛІТИКА, ВЛАДА ТА СВІТОВІ ЛІДЕРИ
  // ==========================================
  group("politics"),
  /політик(?:а|и|ою|і|ів)/iu,
  /корупці(?:я|ї|ю|єю)/iu,
  /депутат(?:и|ів|ом|а)?|президент(?:и|ів|а)?/iu,
  /(?<!\p{L})(?:трамп(?:а|у)?|путін(?:а|у)?|байден(?:а|у)?|зеленськ(?:ий|ого|ому|им))(?!\p{L})/iu,
  /(?<!\p{L})мит(?:о|а|ам|ами|ах)(?!\p{L})/iu,
  /уряд(?:у|ом)?|парламент(?:у|ом)?|(?<!\p{L})влад(?:а|и|ою)(?!\p{L})/iu,
  /санкці(?:ї|й|ям|ями)/iu,
  /домовленість|переговор(?:и|ів|ами)/iu,

  // ==========================================
  // 3. КРИМІНАЛ, НАСИЛЬСТВО ТА ПОЛІЦІЯ
  // ==========================================
  group("crime"),
  /кримінал(?:у|ом)?/iu,
  /поліці(?:я|ї|ю|єю)/iu,
  /(?<!\p{L})суд(?:у|ом|ів)?(?!\p{L})/iu,
  /затриман(?:о|ий|і|а)/iu,
  /вбивств(?:о|а|ом|ах)/iu,
  /крадіжк(?:а|и|ою|ах)/iu,
  /вирок(?:у|и|ів|ами|ах)?/iu,
  /в'?язниц(?:я|і|ю|ею|ях)/iu,
  /арешт(?:у|и|ів|ами|ах)?/iu,
  /теракт(?:и|ів|ами|ах|у)?/iu,
  /вибух(?:и|ів|ами|ах|у)?/iu,
  /злочин(?:у|и|ів|ом)?/iu,
  /напад(?:у|і|ом)?|нападник(?:а|и|ів)?/iu,
  /побої|мордуванн(?:я|ь|ям)/iu,
  /душивши?|заламав/iu,

  // ==========================================
  // 4. ADULT / НЕБАЖАНИЙ ТА ЕРОТИЧНИЙ КОНТЕНТ
  // ==========================================
  group("adult"),
  /порно(?:графі|г| розроб| фільм.*)?/iu,
  /porno|pornography|\bporn\b|hentai|хентай|nsfw/iu,
  /еротик(?:а|и|ою|і|чн.*)?|erotic|erotica/iu,
  /секс(?:у|ом|уальн.*)?(?!\p{L})/iu,
  /\bsex(?:y|ual)?\b/iu,
  /onlyfans|онліфанс|онлифанс|only-?fans/iu,
  /webcam|вебкамер.*|вебка/iu,
  /(?<!\d)18\+(?!\d)|18plus|adult\s+content/iu,
  /оголен(?:а|і|ий|о|их|ення)|роздягнен(?:а|і|ий|о)/iu,
  /без\s+одягу|нагот(?:а|і)|нюдс|nudes?|\bnaked\b/iu,
  /інтим(?:ний|ні|них|ного|у|ом)?|intimat(?:e|y)/iu,
  /стриптиз|топлес|topless/iu,
  /оргі(?:я|ї|ю|ями|й)|оргазм(?:и|ів)?/iu,
  /пікантн(?:і|ий|ого|е)\s+(?:фото|відео|кадри|знімки|подробиці)/iu,
  /гаряч(?:і|е)\s+(?:фото|відео|кадри|бікіні)/iu,
  /без\s+білизни|прозорому\s+вбранні|у\s+бікіні|у\s+купальнику/iu,

  // ==========================================
  // 5. АЗАРТНІ ІГРИ, БЕТТІНГ, КРИПТА ТА РЕЛІГІЯ
  // ==========================================
  group("gambling"),
  /(?:онлайн\s*)?казино|casino/iu,
  /рулетк(?:а|и|у|ою|ці|ок)/iu,
  /слот(?:и|ів|ами|ах|ам)?|slots?/iu,
  /покер(?:у|ом|ний|ного)?|poker/iu,
  /азарт(?:у|ний|ні|них|ою|ість)?/iu,
  /гральн(?:ий|ого|і|их|им|ними)\s+(?:бізнес|автомат|заклад|сектор)/iu,
  /ігров(?:і|их|им|ними)\s+автомат/iu,
  /однорук(?:ий|і)\s+бандит/iu,
  /(?<!\p{L})(?:краіл|кріаіл)(?!\p{L})/iu,
  /лотере(?:я|ї|ю|єю|йний|йного|йних)/iu,
  /джекпот(?:и|ів|ом)?|jackpot/iu,
  /виграш(?:і|ів|ам)?\s+(?:в|у)\s+(?:казино|слотах|лотерею)/iu,
  /букмекер(?:и|ів|ського|ських|ська|ський)?/iu,
  /спортбетт?інг|sports?\s*betting|betting/iu,
  /gambl(?:e|ing|er)?/iu,
  /prediction\s+markets?/iu,
  /ставк(?:а|и|у|ами|ах)\s+(?:онлайн|на|в|у|через)/iu,
  /зроби(?:ти|в|ла)\s+ставку/iu,
  /(?<!\p{L})бк\s+(?:букмекер|ставок|казино)(?!\p{L})/iu,
  /фріспін(?:и|ів)?|freespins?|бездеп(?:озит.*)?/iu,
  /бонус\s+за\s+реєстрацію|промокод\s+(?:казино|ставок)/iu,
  /халяв(?:а|и|у|ою)/iu,

  // Бренди казино та БК
  /favbet|фавбет|favorit\s*(?:bet|casino|sport)|фаворит\s*(?:спорт|казино|бет)/iu,
  /vbet|вбет/iu,
  /cosmolot|космолот/iu,
  /slots\s*city|слотс\s*сіт(?:і|и)/iu,
  /supergra|супер\s*гра|супергра/iu,
  /first\s*casino|ферст\s*казино|фірст\s*казино/iu,
  /casino\s*ua|казино\s*юа/iu,
  /champion\s*casino|чемпіон\s*казино/iu,
  /ggbet|ггбет/iu,
  /slotoking|слотокінг|слотокинг/iu,
  /pin-?up|пінап|пін\s*ап/iu,
  /slotor|слотор/iu,
  /777\s*casino|казино\s*777/iu,
  /parimatch|париматч|паріматч/iu,
  /1xbet|1хбэт|1хбет|1xslots/iu,
  /mostbet|мостбет/iu,
  /(?:vulkan|vulcan|вулкан)\s*(?:casino|bet|vegas|казино|вегас|клуб|ставк\p{L}*)/iu,
  /joycasino|джойказино/iu,
  /casino-x|казино\s*ікс|казино\s*икс/iu,
  /vavada|вавада/iu,
  /melbet|мелбет/iu,
  /betwinner|бетвіннер|бетвиннер/iu,
  /megapari|мегапарі|мегапари/iu,
  /catcasino|catbet|кетказино|кетбет/iu,
  /john\s*bet|джон\s*біт/iu,
  /ice\s*casino|verde\s*casino|hitnspin/iu,
  /fonbet|фонбет|marathonbet|марафонбет/iu,
  /bet365|бет365/iu,
  /unibet|унібет|унибет/iu,
  /william\s*hill|вільям\s*хілл/iu,
  /(?<!\d)888\s*(?:casino|poker|казино|покер)/iu,
  /pokerstars|покерстарс/iu,
  /betfair|бетфеір|бетфеар/iu,
  /bwin|бвін/iu,
  /stake\.com|stake\s*casino|bc\.game|roobet|rollbit/iu,

  group("crypto"),
  // Крипта
  /крипто(?:валюта|валют|гроші|валютні)?|крипт(?:а|і)/iu,
  /crypto(?:currency)?|bitcoin|\bbtc\b|ethereum|\beth\b|\busdt\b|binance/iu,
  /аірдроп|airdrop|тапалк(?:а|и)|hamster\s*kombat|хом['’`ʼ]?як/iu,

  group("religion"),
  // Релігія та езотерика
  /gallup/iu,
  /релігі(?:я|ї|ю|єю|йн.*)/iu,
  /(?<!\p{L})(?:пцу|упц|умп)(?!\p{L})/iu,
  /церкв(?:а|и|і|ою|ами|ах)|храм(?:и|ів|ом|ах)?|собор(?:и|ів)?/iu,
  /патріарх|митрополит|священник|папа\s+римськ.*|ватикан/iu,
  /парафія|єпархія|лавра/iu,
  /(?<!\p{L})сект(?:а|и|ою|ам|ами|ах)(?!\p{L})|саєнтолог.*|свідки\s+єгови/iu,
  /(?<!\p{L})культ(?:и|ів|у|ом)?(?!\p{L})/iu,
  /масон(?:и|ів|ами|ах)?/iu,
  /жертвопринес.*|жертвопринош.*/iu,
  /гороскоп(?:и|ів)?|астролог(?:ічна|ічний|ія|и)?/iu,
  /мольфар(?:и|ів|ами)?|екстрасенс(?:и|ів)?|ворожк(?:а|и|ам)/iu,
  /карт(?:и|ах)\s+таро|(?<!\p{L})гаданн(?:я|ь)(?!\p{L})|нумеролог/iu,
  /пророцтв(?:о|а|ення)|передбаченн(?:я|ь)\s+(?:мольфара|астролога|ванг)/iu,
  /(?<!\p{L})порч(?:а|і)(?!\p{L})|сглаз|приворо/iu,

  // ==========================================
  // 6. ІНШЕ
  // ==========================================
  group("politics"),
  /(?<!\p{L})(?:набу|сап|бэб)(?!\p{L})/iu,
  /обшук(?:и|ів|ами|ах)?/iu,
  /детектив(?:и|ів|ам|ами)?/iu,
  /слідч(?:і|их|им|ий)\s+дії/iu,
  /слуг(?:а|и)\s+народу/iu,
  /фракці(?:я|ї|ю|єю)/iu,
  /міністр(?:и|ів|ам|ами|а)?/iu,
  /голосувати|голосуванн(?:я|ь)/iu,
  group("crime"),
  /підпал(?:и|ів|ам|ами)?/iu,
  /вербувати|завербува.*/iu,

  // ==========================================
  // 7. ДТП, КАТАСТРОФИ ТА ТРАВМИ
  // ==========================================
  group("disasters"),
  /аварі(?:я|ї|ю|єю)/iu,
  /(?<!\p{L})(?:дзп|дтп)(?!\p{L})/iu,
  /врізавс(?:я|ь)|зіткненн(?:я|ь)/iu,
  /травмован(?:і|их|ий|о)/iu,
  /постраждал(?:і|их|и)/iu,

  // ==========================================
  // 8. ВИБОРИ ТА ОПОЗИЦІЯ
  // ==========================================
  group("politics"),
  /вибор(?:и|ів|ам|ах|чий|чої)/iu,
  /опозиці(?:я|ї|ю|єю)/iu,
  /кампані(?:я|ї|ю)/iu,
  /партій(?:ний|них|ні|я|ї)/iu,

  // ==========================================
  // 9. НЕЛЕГАЛЬНИЙ ПЕРЕТИН КОРДОНУ
  // ==========================================
  group("crime"),
  /незаконн(?:ий|ого|е)\s+переправленн(?:я|ь)/iu,
  /схем(?:а|и|ам|ами)\s+(?:виїзду|втечі|переправлення)/iu,

  // ==========================================
  // 10. ДІЯЧІ ТА ПЕРСОНАЛІЇ
  // ==========================================
  /хабар(?:і|ів|ник.*)|хабарництво/iu,
  /шахрайств(?:о|а|і)|шахраї/iu,
  /зґвалтува.*|ґвалтівник(?:а|и)?|педофіл/iu,
  /скандал(?:и|ів)?|розслідуванн(?:я|ь)/iu,
  // ==========================================
  // 13. МЕДІА-ПЕРСОНИ, СКАПРИЗНІ БЛОГЕРИ ТА КУЛЬТУРНІ ДІЯЧІ
  // =========================================
  group("celebrities"),
  // Лариса Ніцой
  /(?<!\p{L})(?:ніцой|ларис(?:а|и|і|у)?\s+ніцой)(?!\p{L})/iu,
  // Євген Хмара (тільки разом із ім'ям, щоб не блокувати погодні хмари!)
  /(?<!\p{L})(?:євген(?:а|у)?\s+хмар(?:а|и|і|ою)?|хмар(?:а|и)?\s+євген(?:а|у)?)(?!\p{L})/iu,
  // Дмитро Гордон
  /(?<!\p{L})(?:гордон(?:а|у|ом)?|дмитро\s+гордон)(?!\p{L})/iu,
  // Спартак Суббота (уточнюємо ім'я, щоб не зачепити день тижня)
  /(?<!\p{L})спартак\s+суббот\p{L}*/iu,
  // Анна Алхім
  /(?<!\p{L})(?:алх[іi]м(?:а|у)?|анн(?:а|и)\s+алх[іi]м)(?!\p{L})/iu,
  // Скандальні блогери, інфлюенсери та шоумени
  /(?<!\p{L})(?:дурнєв(?:а|у)?|кондратюк(?:а|у)?|волошин(?:а|у)?|пренткович)(?!\p{L})/iu,
  // Публічні медіа-ведучі та активісти
  /(?<!\p{L})(?:янін(?:а|и)\s+соколов(?:а|и)|сергі(?:й|я)\s+притул(?:а|и)|олег\s+скрипк(?:а|и))(?!\p{L})/iu,
  group("politics"),
  /(?<!\p{L})(?:єрмак(?:а|у)?|татаров(?:а|у)?|залужн(?:ий|ого|ому)|сирськ(?:ий|ого|ому)|буданов(?:а|у)?|резніков(?:а|у)?|безугл(?:а|у|ої)|арахамі(?:я|ї)|гетьманцев(?:а|у)?)(?!\p{L})/iu,
  /василь\s+малюк/iu,
  /(?<!\p{L})(?:кадиров(?:а|у)?|пригожин(?:а|у)?|герасимов(?:а|у)?|мішустін(?:а|у)?|соловйов(?:а|у)?|скабєєв(?:а|і|у)|сімоньян|дугін(?:а|у)?)(?!\p{L})/iu,
  group("war"),
  /(?<!\p{L})(?:ппо|гур|ова|кмва)(?!\p{L})/iu,
  /(?<!\p{L})(?:каб(?:и|ів|ами)?|фаб(?:и|ів)?)(?!\p{L})|шахед(?:и|ів|ами)?|геран(?:ь|і)/iu,
  /повітрян(?:а|і)\s+тривог(?:а|и)|укритт(?:я|ях)|бомбосховищ(?:е|ах)|приліт(?:и|ів)?|контрнаступ/iu,
  group("economy"),
  /блек\s*аут|відключенн(?:я|ь)\s+(?:світла|електроенергії)|графік(?:и|ів)\s+відключень/iu,
  /інфляці(?:я|ї)|дефолт|подорожчанн(?:я|ь)|податк(?:и|ів)|(?<!\p{L})борг(?:и|ів)(?!\p{L})|дефіцит\s+бюджету/iu,
  /банкрутств(?:о|а)/iu,
  group("politics"),
  /(?<!\p{L})(?:шольц(?:а|у)?|пісторіус(?:а|у)?|фіцо|мелоні|блінкен(?:а|у)?|столтенберг(?:а|у)?|рютте|гросс(?:і|і))(?!\p{L})/iu,
  /фаріон/iu,
  /(?<!\p{L})(?:порошенк|ющенк|кучм|кравчук|янукович|шмигал|гройсман|яценюк|тимошенк|кличк|садов|труханов)(?:о|а|у|ом|ові|ий|ого)?(?!\p{L})/iu,
  /ліндсі\s+ґ?рем|(?<!\p{L})ґ?рем(?!\p{L})/iu,
  /джей\s*ді\s*венс|(?<!\p{L})венс(?!\p{L})/iu,
  /(?<!\p{L})(?:байден|обам|буш|стармер|сунак|джонсон|макрон)(?:а|у|ом|и)?(?!\p{L})/iu,
  /(?<!\p{L})каллас(?!\p{L})/iu,
  /урсул(?:а|и|у)|фон\s+дер\s+ляєн/iu,
  /лукашенк(?:о|а|у|ом)/iu,
  /(?<!\p{L})дуд(?:а|и|і|ою)(?!\p{L})/iu,
  /(?<!\p{L})(?:туск|коморовськ|качинськ)(?:а|у|ом|ий|ого|им)?(?!\p{L})/iu,
  /(?<!\p{L})санд(?:у|и|а)(?!\p{L})/iu,
  /(?<!\p{L})(?:орбан|федоров|лавров|захаров|шойгу|медведєв|пєсков)(?:а|у|ом|и)?(?!\p{L})/iu,
  /хаменеї|пезешкіан|раїсі/iu,
  /сі\s*цзіньпін/iu,
  /кім\s*чен\s*ин/iu,

  // ==========================================
  // 11. ІДЕОЛОГІЇ, ТОТАЛІТАРИЗМ ТА СИМВОЛІКА
  // ==========================================
  group("ideology"),
  /свастик(?:а|и|у|ою)/iu,
  /нацизмін?|нацист(?:и|ів|ський|ська)?/iu,
  /фашизмін?|фашист(?:и|ів|ський|ська)?/iu,
  /рашизмін?|рашист(?:и|ів|ський|ська)?/iu,
  /комунізмін?|комуніст(?:и|ів|ський|ська)?/iu,
  /ґ?геббельс(?:а|у|ом)?/iu,
  /ґ?гіммлер(?:а|у|ом)?/iu,
  /ґ?герінг(?:а|у|ом)?/iu,
  /ґ?гесс(?:а|у|ом)?/iu,
  /борман(?:а|у|ом)?/iu,
  /ейхман(?:а|у|ом)?|айхман(?:а|у|ом)?/iu,
  /ріббентроп(?:а|у|ом)?/iu,
  /менгеле/iu,
  /розенберг(?:а|у|ом)?/iu,
  /кальтенбруннер(?:а|у|ом)?/iu,
  /коновалець|коновальц(?:я|ю|ем)/iu,
  /бандер(?:а|и|і|у|ою|івськ.*)/iu,
  /шухевич(?:а|у|ем)?/iu,
  /андрі(?:й|я)\s+мельник/iu,
  /сталін(?:а|у|ом)?/iu,
  /ленін(?:а|у|ом)?/iu,
  /берій?(?:я|ї|ю|єю)/iu,
  /(?<!коктейл[ьюяі]?\s)(?<!\p{L})молотов(?:а|у|ом)?(?!\p{L})/iu,
  /гітлер(?:а|у|ом)?/iu,

  // ==========================================
  // 12. МАТЮКИ ТА ВУЛЬГАРИЗМИ
  // ==========================================
  group("profanity"),
  /(?<!\p{L})хер(?:а|у|ом|и)?(?!\p{L})/iu,
  /хуй|хюй|х\*+|залуп(?:а|и|у|ою)|мудак(?:и|а|ів)?/iu,
  /пизд|пізд|піпєц|пипец/iu,
  /(?:ви|за|на|під|по|пере|з)?єб(?:ати|ать|ало|аний|ані|уть|учий|ут|анутий)/iu,
  /(?:ви|за|на|під|по|пере|з)?еб(?:ать|ало|анный|анные|учий|учи)|йоб(?:аний|ані|ний|них)/iu,
  /бляд(?:ь|і|я|ям|ство)|блять|(?<!\p{L})бля(?!\p{L})/iu,
  /(?<!\p{L})сук(?:а|и|ою|ам|ами)(?!\p{L})/iu,
  /гондон(?:и|ів)?|гандон(?:и|ів)?|курв(?:а|и|ою)/iu,
  /срак(?:а|и|у|ою|ах)|жоп(?:а|и|у|ою|ах)/iu,
  /(?<!\p{L})гівн(?:о|а|ом)|говно|лайно/iu,
  /сцяв|засцян.*|сцяк/iu,
  /х[*#@$]+й|х[*#@$]+р/iu,
  /п[*#@$]+зд[аяiі]/iu,
  /б[*#@$]+т[ьi]|б[*#@$]+д[ьi]/iu,
  /є[*#@$]+б|е[*#@$]+б/iu,
  group("celebrities"),
  // Додаткові скандальні діячі та блогери
  /(?<!\p{L})(?:арестович(?:а|у)?|шарі(?:й|я|ю)|тищенк(?:о|а|у)|дубінськ(?:ий|ого)|кив(?:а|и|у)|бойк(?:о|а|у)|мураєв(?:а|у)?)(?!\p{L})/iu,

  group("politics"),
  // Олігархи
  /(?<!\p{L})(?:коломойськ(?:ий|ого)|ахметов(?:а|у)?|пінчук(?:а|у)?|фірташ(?:а|у)?)(?!\p{L})/iu,

  // Світові постаті та медіа-магнати
  /(?<!\p{L})(?:ілон\s*маск(?:а|у|ом)?|ердоган(?:а|у)?|нетаньягу)(?!\p{L})/iu,
  // ==========================================
  // 14. ТЕЛЕВЕДУЧІ НОВИН ТА СУПЕРЕЧЛИВІ ШОУ
  // ==========================================

  group("celebrities"),
  // Алла Мазур та Наталія Мосейчук
  /(?<!\p{L})(?:алл(?:а|и|і|у)?\s+мазур|мосейчук|натал(?:ія|і|ією|ію)?\s+мосейчук)(?!\p{L})/iu,

  // Квартал 95 (безпечно: не чіпає звичайні міські або календарні квартали)
  /(?<!\p{L})(?:квартал\s*95|95\s*квартал|95-?й?\s*квартал|студі(?:я|ї|ю)\s+квартал)(?!\p{L})/iu,

  // Дизель Шоу (безпечно: не чіпає дизельне паливо чи двигуни)
  /(?<!\p{L})дизель\s*шоу(?!\p{L})/iu,
  group("war"),
  // Михайло Драпатий (генерал)
  /(?<!\p{L})(?:драпат(?:ий|ого|ому|им|і))(?!\p{L})/iu,

  group("war"),
  // Мобілізація та призов
  /мобілізаці(?:я|ї|ю|єю)|мобілізува.*/iu,
  /призов(?:у|на|ний|ників)?|повісток|повістк(?:а|и|у|ами)/iu,

  // Генштаб та командування
  /(?<!\p{L})(?:генштаб(?:у|ом)?|гш\s+зсу)(?!\p{L})/iu,
  /главком(?:а|у)?|командувач(?:а|і|ів)?/iu,

  group("crime"),
  // Катування та побиття (доповнення до криміналу/насильства)
  /катуванн(?:я|ь|ям)|катува.*/iu,
  /побит(?:тя|тєм|ті)/iu,
  group("religion"),
  /зодіак(?:у|а|и)/iu,
];

/** Категорії фільтра новин (порядок = порядок у налаштуваннях). */
export const NEWS_FILTER_CATEGORIES = [
  { key: "war", label: "Війна та армія" },
  { key: "politics", label: "Політика та влада" },
  { key: "crime", label: "Кримінал і насильство" },
  { key: "disasters", label: "ДТП та катастрофи" },
  { key: "economy", label: "Економіка та блекаути" },
  { key: "ideology", label: "Ідеології та тоталітаризм" },
  { key: "celebrities", label: "Скандальні блогери та шоу" },
  { key: "religion", label: "Релігія та езотерика" },
  { key: "gambling", label: "Казино та ставки" },
  { key: "crypto", label: "Криптовалюта" },
  { key: "adult", label: "18+ контент" },
  { key: "profanity", label: "Матюки" },
];

/** Плаский список усіх шаблонів (для повного фільтра, напр. в ШІ-помічнику). */
export const BANNED_PATTERNS = RAW_PATTERNS.filter((item) => item instanceof RegExp);

const PATTERNS_BY_GROUP = {};
{
  let current = "other";
  for (const item of RAW_PATTERNS) {
    if (item instanceof RegExp) (PATTERNS_BY_GROUP[current] ||= []).push(item);
    else current = item.group;
  }
}

const combinePatterns = (patterns) =>
  new RegExp(patterns.map(({ source }) => `(?:${source})`).join("|"), "iu");

const GROUP_PATTERNS = Object.fromEntries(
  Object.entries(PATTERNS_BY_GROUP).map(([key, patterns]) => [key, combinePatterns(patterns)]),
);

const CHAR_MAP = {
  a: "а",
  c: "с",
  e: "е",
  i: "і",
  o: "о",
  p: "р",
  x: "х",
  y: "у",
  k: "к",
  z: "з",
  n: "н",
};

const ZERO_WIDTH_CHARACTERS = /[\u00AD\u200B-\u200D\u2060\uFEFF]/g;
const WORD_CHARACTERS = /[\p{L}\p{M}]+/gu;
const LATIN_CHARACTERS = /[a-z]/i;
const CYRILLIC_CHARACTERS = /[а-яіїєґ]/iu;
const APOSTROPHE_VARIANTS = /[’ʼ`´‘]/g;
// "п о р н о", "п.о.р.н.о": 3+ окремі літери через роздільники (пробіли не прибираємо у звичайному тексті)
const SPACED_LETTERS = /(?<![\p{L}\p{N}])(?:\p{L}[\s.,_\-*]{1,2}){2,}\p{L}(?![\p{L}\p{N}])/gu;
// "по*рно", "по.рно": символи всередині слова без пробілів
const INNER_SEPARATORS = /(?<=\p{L})[^\p{L}\p{N}\s]{1,3}(?=\p{L})/gu;
const REPEATED_LETTERS = /(\p{L})\1{2,}/gu;
const TOKEN_CHARACTERS = /[\p{L}\p{N}@$]+/gu;
const LEET_CHARACTERS = /[04513@$]/g;
const LEET_MAP = {
  0: "о",
  4: "а",
  5: "с",
  1: "і",
  3: "е",
  "@": "а",
  $: "с",
};
const BANNED_CONTENT_PATTERN = combinePatterns(BANNED_PATTERNS);

/**
 * Нормалізація тексту: заміна латинських літер на кириличні аналоги (для захисту від обходу),
 * видалення невидимих символів і приведення до нижнього регістру.
 */
export const normalizeText = (text) => {
  if (!text) return "";

  return text
    .normalize("NFKC")
    .replace(ZERO_WIDTH_CHARACTERS, "")
    .replace(APOSTROPHE_VARIANTS, "'")
    .toLowerCase()
    .replace(WORD_CHARACTERS, (word) => {
      if (!LATIN_CHARACTERS.test(word) || !CYRILLIC_CHARACTERS.test(word)) {
        return word;
      }

      return word.replace(/[aceiopxykzn]/g, (match) => CHAR_MAP[match]);
    });
};

// Leet застосовуємо лише до токенів, де цифри/символи змішані з літерами ("п0рно"),
// щоб не псувати чисті числа ("18+", "2024").
const applyLeet = (text) =>
  text.replace(TOKEN_CHARACTERS, (token) =>
    /\p{L}/u.test(token) ? token.replace(LEET_CHARACTERS, (m) => LEET_MAP[m]) : token,
  );

const normalizeObfuscatedText = (text) =>
  applyLeet(normalizeText(text))
    .replace(SPACED_LETTERS, (match) => match.replace(/[\s.,_\-*]/g, ""))
    .replace(INNER_SEPARATORS, "")
    .replace(REPEATED_LETTERS, "$1");

const testPattern = (pattern, text) =>
  pattern.test(text) ||
  pattern.test(text.replace(/виборі/giu, " ").replace(/і/g, "и"));

const hasBannedPattern = (text) => testPattern(BANNED_CONTENT_PATTERN, text);

const NEWS_FILTER_STORAGE_KEY = "news_filter_enabled";
const NEWS_FILTER_SOFT_KEY = "news_filter_soft_mode";
const NEWS_FILTER_CATEGORIES_KEY = "news_filter_categories";
const NEWS_FILTER_WORDS_KEY = "news_filter_custom_words";

export const NEWS_FILTER_MAX_WORDS = 50;
export const NEWS_FILTER_MAX_WORD_LENGTH = 300; // з запасом для правил-регулярок

const readJson = (key, fallback) => {
  try {
    const raw = getPref(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeValue = (key, value) => {
  try {
    setPref(key, typeof value === "string" ? value : JSON.stringify(value));
  } catch {}
};

/** Фільтр новин увімкнений за замовчуванням; вимикається лише явним "false". */
export const isNewsFilterEnabled = () => {
  try {
    return getPref(NEWS_FILTER_STORAGE_KEY) !== "false";
  } catch {
    return true;
  }
};

export const setNewsFilterEnabled = (enabled) => {
  try {
    setPref(NEWS_FILTER_STORAGE_KEY, enabled ? "true" : "false");
  } catch {}
};

/** «Не видаляти, а показувати плашку»: заблокована новина лишається у стрічці під плашкою. */
export const isNewsFilterSoftMode = () => {
  try {
    return getPref(NEWS_FILTER_SOFT_KEY) === "true";
  } catch {
    return false;
  }
};

export const setNewsFilterSoftMode = (enabled) =>
  writeValue(NEWS_FILTER_SOFT_KEY, enabled ? "true" : "false");

/** Режим кожної категорії: "hide" (не рекомендувати, за замовчуванням) або "show" (показувати). */
export const getNewsFilterCategoryModes = () => {
  const saved = readJson(NEWS_FILTER_CATEGORIES_KEY, {});
  return Object.fromEntries(
    NEWS_FILTER_CATEGORIES.map(({ key }) => [key, saved?.[key] === "show" ? "show" : "hide"]),
  );
};

export const setNewsFilterCategoryModes = (modes) => writeValue(NEWS_FILTER_CATEGORIES_KEY, modes);

/** Власні слова, які користувач хоче блокувати. */
export const getNewsFilterCustomWords = () => {
  const saved = readJson(NEWS_FILTER_WORDS_KEY, []);
  return Array.isArray(saved) ? saved.filter((w) => typeof w === "string" && w.trim()) : [];
};

export const setNewsFilterCustomWords = (words) =>
  writeValue(NEWS_FILTER_WORDS_KEY, words.slice(0, NEWS_FILTER_MAX_WORDS));

export const getNewsFilterPrefs = () => ({
  enabled: isNewsFilterEnabled(),
  softMode: isNewsFilterSoftMode(),
  categories: getNewsFilterCategoryModes(),
  customWords: getNewsFilterCustomWords(),
});

/** Застосовує налаштування фільтра (напр. з хмари) — з перевіркою типів. */
export const applyNewsFilterPrefs = (prefs) => {
  if (!prefs || typeof prefs !== "object") return;
  if (typeof prefs.enabled === "boolean") setNewsFilterEnabled(prefs.enabled);
  if (typeof prefs.softMode === "boolean") setNewsFilterSoftMode(prefs.softMode);
  if (prefs.categories && typeof prefs.categories === "object") {
    setNewsFilterCategoryModes(
      Object.fromEntries(
        NEWS_FILTER_CATEGORIES.map(({ key }) => [key, prefs.categories[key] === "show" ? "show" : "hide"]),
      ),
    );
  }
  if (Array.isArray(prefs.customWords)) {
    setNewsFilterCustomWords(
      prefs.customWords
        .filter((w) => typeof w === "string" && w.trim())
        .map((w) => w.slice(0, NEWS_FILTER_MAX_WORD_LENGTH)),
    );
  }
};

/*
 * Власний запис може бути:
 *  • звичайним словом/фразою — шукається як є (без різниці великі чи малі літери);
 *  • правилом (регулярним виразом) у форматі /вираз/прапорці, напр. /уряд(?:у|ом)?/iu.
 * Прапорці i (без різниці регістру) та u (Unicode) додаються завжди,
 * g та y відкидаються (вони роблять перевірку залежною від попередніх викликів).
 */
const REGEX_ENTRY = /^\/(.+)\/([a-z]*)$/s;
const regexCache = new Map();

/** @returns {{ kind: "word", text: string } | { kind: "regex", regex: RegExp } | { kind: "invalid", error: string }} */
export const parseNewsFilterEntry = (entry) => {
  const raw = (entry || "").trim();
  const match = raw.match(REGEX_ENTRY);
  if (!match) return { kind: "word", text: raw };
  if (regexCache.has(raw)) return regexCache.get(raw);

  const flags = [...new Set([...match[2].replace(/[gy]/g, ""), "i", "u"])].join("");
  let result;
  try {
    result = { kind: "regex", regex: new RegExp(match[1], flags) };
  } catch (err) {
    result = { kind: "invalid", error: err.message };
  }
  regexCache.set(raw, result);
  return result;
};

/**
 * Повний фільтр (усі категорії) — для ШІ-помічника та інших місць поза новинами.
 * @param {string} text - Текст для перевірки
 * @returns {boolean} - true, якщо знайдено заборонений контент
 */
export const hasBannedContent = (text) => {
  if (!text) return false;
  const normalized = normalizeText(text);
  return hasBannedPattern(normalized) || hasBannedPattern(normalizeObfuscatedText(text));
};

/**
 * Фільтр новин з урахуванням налаштувань користувача.
 * @returns {{ type: "category" | "custom", key: string, label: string } | null}
 *   причина блокування або null, якщо новину можна показувати
 */
export const getNewsBlockReason = (text, prefs = getNewsFilterPrefs()) => {
  if (!text || !prefs.enabled) return null;
  const variants = [normalizeText(text), normalizeObfuscatedText(text)];

  for (const { key, label } of NEWS_FILTER_CATEGORIES) {
    if (prefs.categories?.[key] === "show") continue;
    const pattern = GROUP_PATTERNS[key];
    if (pattern && variants.some((v) => testPattern(pattern, v))) {
      return { type: "category", key, label };
    }
  }

  for (const word of prefs.customWords || []) {
    const entry = parseNewsFilterEntry(word);
    if (entry.kind === "regex") {
      if (variants.some((v) => testPattern(entry.regex, v))) {
        return { type: "custom", key: word, label: `Ваше правило ${word.trim()}` };
      }
    } else if (entry.kind === "word") {
      const needle = normalizeText(entry.text);
      if (needle && variants.some((v) => v.includes(needle))) {
        return { type: "custom", key: word, label: `Ваше слово «${entry.text}»` };
      }
    }
  }

  return null;
};
