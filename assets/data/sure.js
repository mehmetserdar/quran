const sure = [
	{
		name : "Fatiha Sûresi",
		arab : "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ١﴾ اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَم۪ينَۙ ﴿٢﴾ اَلرَّحْمٰنِ الرَّح۪يمِۙ ﴿٣﴾ مَالِكِ يَوْمِ الدّ۪ينِۜ ﴿٤﴾ اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَع۪ينُۜ ﴿٥﴾ اِهْدِنَا الصِّرَاطَ الْمُسْتَق۪يمَۙ ﴿٦﴾ صِرَاطَ الَّذ۪ينَ اَنْعَمْتَ عَلَيْهِمْۙ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّٓالّ۪ينَ ﴿٧",
		turk : "1- Bismillâhi’r-Rahmâni’r-Rahîm. 2- Elhamdulillâhi Rabbi’l-âlemîn. 3- Er-Rahmâni’r-Rahîm. 4- Mâliki yevmi’d-dîn. 5- İyyâke na’budu ve iyyâke neste’în. 6- İhdine’s-sırâta’l-mustakîm. 7- Sırâta’l-lezîne en’amte aleyhim. Ğayri’l-meğdûbi aleyhim ve le’d-dâllîn",
		en : "1- Rahmân ve Rahîm olan Allah’ın adıyla. 2- Hamd; Âlemlerin Rabbi olan Allah’a aittir. 3- (O Allah) Rahmân ve Rahîm’dir. 4- Din (ödül ve ceza) gününün sahibidir. 5- (Ey Allah’ım) Biz yalnızca Sana ibadet eder ve yalnızca Sen’den yardım dileriz. 6- Bizi dosdoğru yola ilet. 7- Kendilerine nimet verdiğin kimselerin yoluna ilet, gazaba uğrayanların ve sapıkların yoluna değil",	
	},
	{
		name : "Fil Sûresi",
		arab : "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يم اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِاَصْحَابِ الْف۪يلِۜ ﴿١﴾ اَلَمْ يَجْعَلْ كَيْدَهُمْ ف۪ي تَضْل۪يلٍۙ ﴿٢﴾ وَاَرْسَلَ عَلَيْهِمْ طَيْراً اَبَاب۪يلَۙ ﴿٣﴾ تَرْم۪يهِمْ بِحِجَارَةٍ مِنْ سِجّ۪يلٍۖۙ ﴿٤﴾ فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
		turk : "Bismillâhi’r-Rahmâni’r-Rahîm. 1- “Elemtera keyfe fe’ale Rabbuke bi-ashâbi’l-fîl. 2- Elem yec’al keydehum fî tadlîl. 3- Ve ersele ’aleyhim tayran ebâbîl. 4- Termîhim bi-hicâratin min siccîl. 5- Fece’alehum ke’asfin me’kûl.",
		en : "Rahmân ve Rahîm olan Allah’ın adıyla. 1- “Rabbin fil sahiplerine neler etti, görmedin mi? 2- Onların kötü planlarını boşa çıkarmadı mı? 3- Onların üstüne ebabil kuşları gönderdi. 4- O kuşlar, onların üzerlerine pişkin tuğladan yapılmış taşlar atıyordu. 5- Böylece Allah onları yenilip çiğnenmiş ekine çevirdi.",		
	},
	{
		name : "Kureyş Sûresi",
		arab : "لِا۪يلَافِ قُرَيْشٍۙ ﴿١﴾ ا۪يلَافِهِمْ رِحْلَةَ الشِّتَٓاءِ وَالصَّيْفِۚ ﴿٢﴾ فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِۙ ﴿٣﴾ اَلَّذ۪ٓي اَطْعَمَهُمْ مِنْ جُوعٍ وَاٰمَنَهُمْ مِنْ خَوْفٍ",
		turk : "Bismillâhi’r-Rahmâni’r-Rahîm. 1- Li îlâfi kurayş. 2- Îlâfihim rihlete’ş-şitâi ve’s-sayf. 3- Felya’budû Rabbe hâze’l-beyt. 4- Ellezî et’amehum min cû’in ve âmenehum min havf.",
		en : "Rahmân ve Rahîm olan Allah’ın adıyla. 1- “Kureyş’in emniyetini sağladığı, 2- Yaz ve kış yolculuğunda onları (güvenliğe ulaştırıp başkalarıyla) ısındırıp yakınlaştırdığı için onlar, 3- Bu evin (mabed’in, Kâbe’nin) Rabbine kulluk etsinler. 4- Ki O (Allah) kendilerini açlıktan (kurtarıp) doyuran ve her çeşit korkudan güvenliğe kavuşturandır.",		
	},
	{
		name : "Mâun Sûresi",
		arab : "اَرَاَيْتَ الَّذ۪ي يُكَذِّبُ بِالدّ۪ينِۜ ﴿١﴾ فَذٰلِكَ الَّذ۪ي يَدُعُّ الْيَت۪يمَۙ ﴿٢﴾ وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْك۪ينِۜ ﴿٣﴾ فَوَيْلٌ لِلْمُصَلّ۪ينَۙ ﴿٤﴾ اَلَّذ۪ينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَۙ ﴿٥﴾ اَلَّذ۪ينَ هُمْ يُرَٓاؤُ۫نَۙ ﴿٦﴾ وَيَمْنَعُونَ الْمَاعُونَ",
		turk : "Bismillâhi’r-Rahmâni’r-Rahîm. 1- “Eraeytellezî yukezzibu bi’d-dîn. 2- Fezâlike’l-lezî yedu’ul-yetîm. 3- Ve lâ yehuddu alâ ta’âmi’l-miskîn. 4- Feveylun lil-musallîn. 5- Ellezînehum an salâtihim sâhûn. 6- Ellezînehum yurâûn. 7- Ve yemne’ûne’l-mâ’ûn.",
		en : "Rahmân ve Rahîm olan Allah’ın adıyla. 1- “Din gününü (İslam’ı, ahirette ceza ve mükâfatı) yalanlayanı gördün mü? 2- İşte o, yetimi itip kakar. 3- Yoksulu doyurmayı teşvik etmez (önayak olmaz). 4- Şu namaz kılanların vay haline! 5- Onlar namazlarından gafildirler (önem vermezler). 6- Onlar gösteriş (için ibadet) yaparlar. 7- Ve onlar en küçük bir yardımı (zekâtı) da engellerler.",		
	},	
	{
		name : "Kevser Sûresi",
		arab : "اِنَّٓا اَعْطَيْنَاكَ الْـكَوْثَرَۜ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْۜ ﴿٢﴾ اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ ",
		turk : "Bismillâhi’r-Rahmâni’r-Rahîm. 1- “İnnâ a’taynâ ke’l-kevser. 2- Fesalli li-Rabbike ve’nhar. 3- İnne şâni’eke huve’l-ebter",
		en : "Rahmân ve Rahîm olan Allah’ın adıyla. 1- “Şüphesiz biz sana Kevser’i verdik. 2- Öyleyse Rabbin için namaz kıl ve kurban kes. 3- Asıl sonu kesik olan, senin düşmanın (sana buğzeden)dir",		
	},
	{
		name : "Kâfirûn Sûresi",
		arab : "قُلْ يَٓا اَيُّهَا الْـكَافِرُونَۙ ﴿١﴾ لَٓا اَعْبُدُ مَا تَعْبُدُونَۙ ﴿٢﴾ وَلَٓا اَنْتُمْ عَابِدُونَ مَٓا اَعْبُدُۚ ﴿٣﴾ وَلَٓا اَنَا۬ عَابِدٌ مَا عَبَدْتُمْۙ ﴿٤﴾ وَلَٓا اَنْتُمْ عَابِدُونَ مَٓا اَعْبُدُۜ ﴿٥﴾ لَـكُمْ د۪ينُكُمْ وَلِيَ د۪ينِ",
		turk : "Bismillâhi’r-Rahmâni’r-Rahîm. 1- “Gul yâ eyyuhe’l-kâfirûn. 2- Lâ a’budu mâ ta’budûn. 3- Ve lâ entum âbidûne mâ a’bud. 4- Velâ ene âbidun mâ abettum. 5- Velâ entum âbidûne mâ a’bud. 6- Lekum dînukum veliye dîn.",
		en : "Rahmân ve Rahîm olan Allah’ın adıyla. 1- “De ki: Ey kâfirler. 2- Ben sizin taptıklarınıza tapmam. 3- Siz de benim ibadet ettiğime ibadet edecek değilsiniz. 4- Ben de sizin taptıklarınıza tapacak değilim. 5- Siz de benim ibadet ettiğime, ibadet edecek değilsiniz. 6- Sizin dininiz size, benim dinim bana.",		
	},
	{
		name : "Ayet-el Kûrsi",
		arab : "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّح۪يمِ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاو ;َاتِ وَالأَرْضَ وَلاَ يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ٢٥٥",
		turk : "Allâhu lâ ilâhe illâ huve’l-hayyu’l-kayyûm. Lâ te’huzuhû sinetun ve lâ nevm. Lehû mâ fi’s-semâvâti ve mâ fi’l-ardı men zellezî yeşfe’u ‘ındehû illâ bi iznih. Ya’lemu mâ beyne eydîhim ve mâ halfehum ve lâ yuhîtûne bi şey’in min ‘ılmihî illâ bimâ şâe vesi’a kursiyyuhu’s-semâvâti ve’larda ve lâ yeûduhû hıfzuhumâ ve huve’l-‘aliyyu’l-‘azîm.",
		en : "O'ndan başka ilah olmayan Allah, hay ve kayyumdur (ezel ve ebedidir). O'nu uyuklama ve uyku tutmaz. Göklerde ve yerlerde olan şeyler O'nundur. İzni olmaksızın O'nun yanında şefaat eden yoktur. Halkın önünde ve arkasında olanı (istikbal ve maziyi) bilir. İnsanlar O'nun ilminden, O'nun isteğinden başkasını ihata edemezler. Kürsisi semaları ve yeri içine alır. Onların hıfzı O'nu (Cenab-ı Ecelli Ala'yı) yormaz. O, pek yüksek ve büyüktür.",		
	},
	
];