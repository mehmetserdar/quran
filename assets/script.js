const indexPage = () => {
  $("#quran").click(() => {
    document.location.href = "quran.html";
  });
  $("#time").click(() => {
    mevcutDegil();
  });
  $("#dua").click(() => {
    document.location.href = "dua-list.html";
  });
  $("#sure").click(() => {
    document.location.href = "sure-list.html";
  });
  $("#abdest").click(() => {
    document.location.href = "abdest.html";
  });
  $("#sayac").click(() => {
    document.location.href = "counter.html";
  });
  $("#settings").click(() => {
    mevcutDegil();
  });
  $("#bookmark").click(() => {
    document.location.href = "bookmark.html";
  });
  $("#about").click(() => {
    document.location.href = "about.html";
  });
  $("#app").click(() => {
    document.location.href = "https://play.google.com/store/apps/details?id=com.mobuyg.kuran";
  });

  $(".full-screen").click(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  const mevcutDegil = () => {
    alert("Sayfa mevcut değil");
  };
};
const lang = localStorage.getItem("langValue");
function loadLanguage() {
  if (lang == null) {
    localStorage.setItem("langValue", "tr");
  }
}

var userLang =
  navigator.language || navigator.userLanguage || navigator.systemLanguage;
const duaListPage = () => {
  //dua-list.html

  let i = 1;
  dua.forEach((d) => {
    const html = `<li id="${i}" class="dua list-group-item list-group-item-dark ">${d.name}</li>`;
    $("#list-dua").append(html);
    i++;
  });

  $(".dua").click((e) => {
    document.location.href = `dua.html?${$(e.target).attr("id")}`;
  });
};

const duaPage = () => {
  //dua.html
  const url = window.location.href;
  const id = url.substr(url.indexOf("?") + 1);

  d = dua[id - 1];

  $(".title").text(`${d.name}`);
  $(".baslik").text(`${d.name}`);
  $(".yazi-arab").text(d.arab);
  $(".yazi-en").text(d.turk);
  $(".yazi-turk").text(d.en);
};

const sureListPage = () => {
  //sure-list.html

  let i = 1;
  sure.forEach((d) => {
    const html = `<li id="${i}" class="sure list-group-item list-group-item-dark ">${d.name}</li>`;
    $("#list-sure").append(html);
    i++;
  });

  $(".sure").click((e) => {
    document.location.href = `sure.html?${$(e.target).attr("id")}`;
  });
};

const surePage = () => {
  //sure.html
  const url = window.location.href;
  const id = url.substr(url.indexOf("?") + 1);

  d = sure[id - 1];

  $(".title").text(`${d.name}`);
  $(".baslik").text(`${d.name}`);
  $(".yazi-arab").text(d.arab);
  $(".yazi-en").text(d.turk);
  $(".yazi-turk").text(d.en);
};

const quranPage = () => {
  //Quran.html
  $.get("https://api.alquran.cloud/v1/surah", (data) => {
    contentList(data.data);
    $(".loading").css("display", "none");
  });

  const contentList = (data) => {
    let i = 1;

    let sureler = [
      "",
      "Fatiha",
      "Bakara",
      "Ali İmran",
      "Nisa",
      "Maide",
      "Enam",
      "Araf",
      "Enfal",
      "Tevbe",
      "Yunus",
      "Hud",
      "Yusuf",
      "Rad",
      "İbrahim",
      "Hicr",
      "Nahl",
      "İsra",
      "Kehf",
      "Meryem",
      "Taha",
      "Enbiya",
      "Hacc",
      "Muminun",
      "Nur",
      "Furkan",
      "Şuara",
      "Neml",
      "Kasas",
      "Ankebut",
      "Rum",
      "Lokman",
      "Secde",
      "Ahzab",
      "Sebe",
      "Fatır",
      "Yasin",
      "Saffat",
      "Sad",
      "Zümer",
      "Mümin",
      "Fussilet",
      "Şura",
      "Zuhruf",
      "Duhan",
      "Casiye",
      "Ahkaf",
      "Muhammed",
      "Fetih",
      "Hucurat",
      "Kaf",
      "Zariyat",
      "Tur",
      "Necm",
      "Kamer",
      "Rahman",
      "Vakıa",
      "Hadid",
      "Mücadele",
      "Haşr",
      "Mümtahine",
      "Saff",
      "Cuma",
      "Münafikun",
      "Tegabun",
      "Talak",
      "Tahrim",
      "Mülk",
      "Kalem",
      "Hakka",
      "Mearic",
      "Nuh",
      "Cinn",
      "Müzzemmil",
      "Müddessir",
      "Kıyamet",
      "İnsan",
      "Mürselat",
      "Nebe",
      "Naziat",
      "Abese",
      "Tekvir",
      "İnfitar",
      "Mutaffifin",
      "İnşikak",
      "Buruc",
      "Tarık",
      "Ala",
      "Gaşiye",
      "Fecr",
      "Beled",
      "Şems",
      "Leyl",
      "Duha",
      "İnşirah",
      "Tin",
      "Alak",
      "Kadir",
      "Beyyine",
      "Zilzal",
      "Adiyat",
      "Karia",
      "Tekasur",
      "Asr",
      "Hümeze",
      "Fil",
      "Kureyş",
      "Maun",
      "Kevser",
      "Kafirun",
      "Nasr",
      "Leheb",
      "İhlas",
      "Felak",
      "Nas",
    ];
    if (lang == "tr") {
      data.forEach((d) => {
        const elemenList = `<tr  class="">
                            <th class="td1" width="30"><div class="no_s">${i}</div> </th>
                            
                            <td class="td2 strong name_s" no-surah="${d.number}">${sureler[i]}</td>
                            <td class="td2 text-right">${d.numberOfAyahs} Ayet</td>
                        </tr>`;
        $("#list").append(elemenList);
        i++;
      });
    } else {
      data.forEach((d) => {
        const elemenList = `<tr  class="">
                            <th class="td1" width="30"><div class="no_s">${i}</div> </th>
                            
                            <td class="td2 strong name_s" no-surah="${d.number}">${d.englishName}</td>
                            <td class="td2 text-right">${d.numberOfAyahs} Verses</td>
                        </tr>`;
        $("#list").append(elemenList);
        i++;
      });
    }

    $(".name_s").click((e) => {
      document.location.href = `surah.html?${$(e.target).attr("no-surah")}`;
    });
  };

  $(".fa-bookmark").click((e) => {
    e.preventDefault();
    document.location.href = "bookmark.html";
  });
};

const surahPage = () => {
  //Surah.html
  const url = window.location.href;
  let no_s = "";
  let no_a;

  if (url.search("#") != -1) {
    no_s = url.substring(url.indexOf("?") + 1, url.indexOf("#"));
    no_a = url.substr(url.indexOf("#") + 1);
  } else {
    no_s = url.substr(url.indexOf("?") + 1);
  }
  /*  ,  de.khoury  ,  */
  switch (lang) {
    case "id":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,id.indonesian`;
      break;
    case "de":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,de.khoury`;
      break;
    case "es":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,es.cortes`;
      break;
    case "ru":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,ru.kuliev`;
      break;
    case "fr":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,fr.hamidullah`;
      break;
    case "en":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,en.asad`;
      break;
    case "ur":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,ur.ahmedali`;
      break;
    case "hi":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,hi.farooq`;
      break;
    default:
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,tr.vakfi`;
      break;
  }

  let surah = [];
  let totalAyat;
  let sureler = [
    "",
    "Fatiha",
    "Bakara",
    "Ali İmran",
    "Nisa",
    "Maide",
    "Enam",
    "Araf",
    "Enfal",
    "Tevbe",
    "Yunus",
    "Hud",
    "Yusuf",
    "Rad",
    "İbrahim",
    "Hicr",
    "Nahl",
    "İsra",
    "Kehf",
    "Meryem",
    "Taha",
    "Enbiya",
    "Hacc",
    "Muminun",
    "Nur",
    "Furkan",
    "Şuara",
    "Neml",
    "Kasas",
    "Ankebut",
    "Rum",
    "Lokman",
    "Secde",
    "Ahzab",
    "Sebe",
    "Fatır",
    "Yasin",
    "Saffat",
    "Sad",
    "Zümer",
    "Mümin",
    "Fussilet",
    "Şura",
    "Zuhruf",
    "Duhan",
    "Casiye",
    "Ahkaf",
    "Muhammed",
    "Fetih",
    "Hucurat",
    "Kaf",
    "Zariyat",
    "Tur",
    "Necm",
    "Kamer",
    "Rahman",
    "Vakıa",
    "Hadid",
    "Mücadele",
    "Haşr",
    "Mümtahine",
    "Saff",
    "Cuma",
    "Münafikun",
    "Tegabun",
    "Talak",
    "Tahrim",
    "Mülk",
    "Kalem",
    "Hakka",
    "Mearic",
    "Nuh",
    "Cinn",
    "Müzzemmil",
    "Müddessir",
    "Kıyamet",
    "İnsan",
    "Mürselat",
    "Nebe",
    "Naziat",
    "Abese",
    "Tekvir",
    "İnfitar",
    "Mutaffifin",
    "İnşikak",
    "Buruc",
    "Tarık",
    "Ala",
    "Gaşiye",
    "Fecr",
    "Beled",
    "Şems",
    "Leyl",
    "Duha",
    "İnşirah",
    "Tin",
    "Alak",
    "Kadir",
    "Beyyine",
    "Zilzal",
    "Adiyat",
    "Karia",
    "Tekasur",
    "Asr",
    "Hümeze",
    "Fil",
    "Kureyş",
    "Maun",
    "Kevser",
    "Kafirun",
    "Nasr",
    "Leheb",
    "İhlas",
    "Felak",
    "Nas",
  ];

  $.get(url_api, (data) => {
    isiData(data.data);
    totalAyat = data.data[0].numberOfAyahs;
    $(".loading").css("display", "none");
    $(".baslik").text(`${sureler[data.data[1].number]}`);
    $("#title").text(`${sureler[data.data[1].number]}`);
    $(".title").text(`${sureler[data.data[1].number]}`);
  });

  const isiData = (data) => {
    for (let i = 0; i < data[0].numberOfAyahs; i++) {
      const obj = {
        arab: "",
        tr: "",
        en: "",
        ru: "",
        es: "",
        de: "",
        fr: "",
        id: "",
        ur: "",
        hi: "",
        audio: "",
      };
      surah.push(obj);
    }

    let i = 0;
    data[0].ayahs.forEach((ayah) => {
      surah[i].audio = ayah.audio;

      i++;
    });
    i = 0;
    data[0].ayahs.forEach((ayah) => {
      surah[i].arab = ayah.text;

      i++;
    });

    switch (lang) {
      case "en":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].en = ayah.text;

          i++;
        });
        break;
      case "ru":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].ru = ayah.text;

          i++;
        });
        break;
      case "es":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].es = ayah.text;

          i++;
        });
        break;
      case "de":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].de = ayah.text;

          i++;
        });
        break;
      case "fr":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].fr = ayah.text;

          i++;
        });
        break;
      case "id":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].id = ayah.text;

          i++;
        });
        break;
      case "ur":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].ur = ayah.text;

          i++;
        });
        break;
      case "hi":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].hi = ayah.text;

          i++;
        });
        break;
      default:
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].tr = ayah.text;

          i++;
        });
        break;
    }

    showData();
  };

  const showData = () => {
    i = 1;
    surah.forEach((ayah) => {
      const elementList = `<li class="list-item" id="${i}">
            <div class="item-icon">
                <div class="no-ayat">
                    ${i}
                </div>
                <a class="text text-success"><i class="fas fa-play fa-lg" data-id="${i}"></i></a><br> 
                <a class="text text-danger"><i class="fas fa-stop fa-lg" data-id="${i}"></i></a><br> 
                <a class="text text-dark"><i class="fas fa-bookmark fa-lg" data-id="${i}"></i></a>
            </div>
            <div class="item-yazi">
                <div class="yazi-arab">${ayah.arab}</div>
                <div class="yazi-tr">${ayah.tr}</div>
                <div class="yazi-tr">${ayah.en}</div>
                <div class="yazi-tr">${ayah.ru}</div>
                <div class="yazi-tr">${ayah.de}</div>
                <div class="yazi-tr">${ayah.es}</div>
                <div class="yazi-tr">${ayah.fr}</div>
                <div class="yazi-tr">${ayah.id}</div>
                <div class="yazi-tr">${ayah.ur}</div>
                <div class="yazi-tr">${ayah.hi}</div>
            </div>
        </li>`;

      $("#list-ayah").append(elementList);

      i++;
    });

    $(".fa-play").click((e) => {
      methodPlay(e);
    });
    $(".fa-stop").click((e) => {
      stopAudio(e);
    });
    $(".fa-bookmark").click((e) => {
      const toast = document.querySelector(".toast");
      toast.style.visibility = "visible";
      methodBookmark(e);
    });

    if (url.search("#") != -1) {
      document.getElementById(no_a).scrollIntoView();
    }
  };

  const methodPlay = (e) => {
    //onAudio();
    playAudio($(e.target).attr("data-id"));
  };

  let isPlaying = false;

  const playAudio = (no) => {
    if (isPlaying) {
      stopAudio();
    }
    const el = `<audio id="surahPlayer" src="${
      surah[no - 1].audio
    }" type="audio/mp3" controls="controls" class="audioAyah audioAyah${no}"></audio>`;
    $(".list-audio").append(el);

    const audioAyah = document.querySelector(`.audioAyah${no}`);
    var calanSure = document.getElementsByClassName("no-ayat");

    calanSure[no - 1].setAttribute(
      "style",
      "background-color : greenyellow ; border: 2px solid green"
    );

    audioAyah.play();
    no++;

    if (no <= totalAyat) {
      audioAyah.addEventListener("ended", () => {
        playAudio(no);
      });
    }

    if (no == totalAyat) {
      isPlaying = true;
    }
  };

  const methodBookmark = (e) => {
    const bookmarkObj = {
      surah: no_s,
      ayat: $(e.target).attr("data-id"),      
    };
    addData(bookmarkObj);

    $(".toast").toast("show");
  };

  $(".fa-stop").click(() => {
    stopAudio();
  });

  const stopAudio = () => {
    const audioAyah = document.querySelectorAll(".audioAyah");
    audioAyah.forEach((audAy) => {
      audAy.pause();
      audAy.currentTime = 0;
    });
    isPlaying = true;
  };

  const onAudio = () => {
    i = 1;
    surah.forEach((ayah) => {
      const el = `<audio id="surahPlayer" src="${ayah.audio}" type="audio/mp3" controls="controls" class="audioAyah audioAyah${i}"></audio>`;
      $(".list-audio").append(el);
      i++;
    });
  };
};

const bookmarkPage = () => {
  const data = readData();
  let i = 0;
  let sureler = [
    "",
    "Fatiha",
    "Bakara",
    "Ali İmran",
    "Nisa",
    "Maide",
    "Enam",
    "Araf",
    "Enfal",
    "Tevbe",
    "Yunus",
    "Hud",
    "Yusuf",
    "Rad",
    "İbrahim",
    "Hicr",
    "Nahl",
    "İsra",
    "Kehf",
    "Meryem",
    "Taha",
    "Enbiya",
    "Hacc",
    "Muminun",
    "Nur",
    "Furkan",
    "Şuara",
    "Neml",
    "Kasas",
    "Ankebut",
    "Rum",
    "Lokman",
    "Secde",
    "Ahzab",
    "Sebe",
    "Fatır",
    "Yasin",
    "Saffat",
    "Sad",
    "Zümer",
    "Mümin",
    "Fussilet",
    "Şura",
    "Zuhruf",
    "Duhan",
    "Casiye",
    "Ahkaf",
    "Muhammed",
    "Fetih",
    "Hucurat",
    "Kaf",
    "Zariyat",
    "Tur",
    "Necm",
    "Kamer",
    "Rahman",
    "Vakıa",
    "Hadid",
    "Mücadele",
    "Haşr",
    "Mümtahine",
    "Saff",
    "Cuma",
    "Münafikun",
    "Tegabun",
    "Talak",
    "Tahrim",
    "Mülk",
    "Kalem",
    "Hakka",
    "Mearic",
    "Nuh",
    "Cinn",
    "Müzzemmil",
    "Müddessir",
    "Kıyamet",
    "İnsan",
    "Mürselat",
    "Nebe",
    "Naziat",
    "Abese",
    "Tekvir",
    "İnfitar",
    "Mutaffifin",
    "İnşikak",
    "Buruc",
    "Tarık",
    "Ala",
    "Gaşiye",
    "Fecr",
    "Beled",
    "Şems",
    "Leyl",
    "Duha",
    "İnşirah",
    "Tin",
    "Alak",
    "Kadir",
    "Beyyine",
    "Zilzal",
    "Adiyat",
    "Karia",
    "Tekasur",
    "Asr",
    "Hümeze",
    "Fil",
    "Kureyş",
    "Maun",
    "Kevser",
    "Kafirun",
    "Nasr",
    "Leheb",
    "İhlas",
    "Felak",
    "Nas",
  ];

  let surahNames = [
    "",
    "Al-Fatiha",
    "Al-Baqara",
    "Al Imran",
    "An-Nisa",
    "Al-Ma'ida",
    "Al-An'am",
    "Al-A'raf",
    "Al-Anfal",
    "At-Tawba",
    "Yunus",
    "Houd",
    "Yusuf",
    "Ar-Ra'd",
    "Ibraheem",
    "Al-Hijr",
    "An-Nahl",
    "Al-Isra",
    "Al-Kahf",
    "Maryam",
    "Ta-Ha",
    "Al-Anbiya",
    "Al-Hajj",
    "Al-Mu'minoon",
    "An-Nour",
    "Al-Furqan",
    "Ash-Shu'ara",
    "An-Naml",
    "Al-Qasas",
    "Al-Ankabut",
    "Ar-Roum",
    "Luqman",
    "As-Sajda",
    "Al-Ahzab",
    "Saba",
    "Fatir",
    "Yaseen",
    "As-Saffat",
    "Sad",
    "Az-Zumar",
    "Ghafir",
    "Fussilat",
    "Ash-Shura",
    "Az-Zukhruf",
    "Ad-Dukhan",
    "Al-Jathiya",
    "Al-Ahqaf",
    "Muhammad",
    "Al-Fath",
    "Al-Hujurat",
    "Qaf",
    "Adh-Dhariyat",
    "At-Tour",
    "An-Najm",
    "Al-Qamar",
    "Ar-Rahman",
    "Al-Waqi'a",
    "Al-Hadeed",
    "Al-Mujadila",
    "Al-Hashr",
    "Al-Mumtahana",
    "As-Saff",
    "Al-Jumu'aa",
    "Al-Munafiqoun",
    "At-Taghabun",
    "At-Talaq",
    "At-Tahreem",
    "Al-Mulk",
    "Al-Qalam",
    "Al-Haqqa",
    "Al-Ma'aarij",
    "Nouh",
    "Al-Jinn",
    "Al-Muzzammil",
    "Al-Muddathir",
    "Al-Qiyama",
    "Al-Insan",
    "Al-Mursalat",
    "An-Naba'",
    "An-Nazi'at",
    "Abasa",
    "At-Takweer",
    "Al-Infitar",
    "Al-Mutaffifeen",
    "Al-Inshiqaq",
    "Al-Burooj",
    "At-Tariq",
    "Al-A'la",
    "Al-Ghashiyah",
    "Al-Fajr",
    "Al-Balad",
    "Ash-Shams",
    "Al-Lail",
    "Ad-Dhuha",
    "Al-Inshirah",
    "At-Teen",
    "Al-Alaq",
    "Al-Qadr",
    "Al-Bayyina",
    "Az-Zalzala",
    "Al-Adiyat",
    "Al-Qaria",
    "At-Takathur",
    "Al-Asr",
    "Al-Humaza",
    "Al-Feel",
    "Quraysh",
    "Al-Maa'oun",
    "Al-Kawthar",
    "Al-Kafiroun",
    "An-Nasr",
    "Al-Masad",
    "Al-Ikhlas",
    "Al-Falaq",
    "Al-Nas",
  ];
  data.forEach((d) => {
    if (lang == "tr") {
      const html = `<li class="bookmark list-group-item list-group-item-dark d-flex justify-content-between align-items-center " data-surah="${
        d.surah
      }" data-ayat="${d.ayat}" index="${i}" id="${i}">
        ${sureler[d.surah]}:${d.ayat}
        <span class="badge badge-danger badge-pill">X</span>
    </li`;
      $("#list-bookmark").append(html);
      i++;
    } else {
      const html = `<li class="bookmark list-group-item list-group-item-dark d-flex justify-content-between align-items-center " data-surah="${
        d.surah
      }" data-ayat="${d.ayat}" index="${i}" id="${i}">
        ${surahNames[d.surah]}:${d.ayat}
        <span class="badge badge-danger badge-pill">X</span>
    </li`;
      $("#list-bookmark").append(html);
      i++;
    }
  });

  $(".bookmark").click((e) => {
    document.location.href = `surah.html?${$(e.target).attr("data-surah")}#${$(
      e.target
    ).attr("data-ayat")}`;
  });
  $(".bookmark span").click((e) => {
    e.stopPropagation();
    const id = $(e.target.parentElement).attr("index");
    deleteData(id);
    $("li").remove(`#${id}`);
  });
};

// Check if User Agent is Android
const isAndroid = /Android/i.test(navigator.userAgent);

// Hide Navigation Menu on Android Devices
if (isAndroid) {
  const nav = document.querySelector("header");
  const app = document.querySelector("#app");
  nav.style.display = "none";
  app.style.display = "none";
};


