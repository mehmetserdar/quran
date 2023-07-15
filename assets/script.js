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
    document.location.href =
      "https://play.google.com/store/apps/details?id=com.mobuyg.kuran";
  });
  $("#other").click(() => {
    document.location.href =
      "https://play.google.com/store/apps/dev?id=7123957245789156225";
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

const meal = localStorage.getItem("mealValue");
function loadMeal() {
  if (meal == null) {
    localStorage.setItem("mealValue", "vakif");
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
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,id.indonesian`;
      break;
    case "de":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,de.khoury`;
      break;
    case "es":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,es.cortes`;
      break;
    case "ru":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,ru.kuliev`;
      break;
    case "fr":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,fr.hamidullah`;
      break;
    case "en":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,en.asad`;
      break;
    case "ur":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,ur.ahmedali`;
      break;
    case "hi":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,hi.farooq`;
      break;
    case "bs":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,bs.korkut`;
      break;
    case "az":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,az.musayev`;
      break;
    case "ug":
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,ug.saleh`;
      break;
    default:
      var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,tr.diyanet`;
      break;
  }

  if (lang == "tr") {
    switch (meal) {
      case "vakfi":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,tr.vakfi`;
        break;
      case "yazir":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,tr.yazir`;
        break;
      case "golpinar":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,tr.golpinarli`;
        break;
      case "ozturk":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,tr.ozturk`;
        break;
      case "ates":
        var url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.saoodshuraym,tr.ates`;
        break;
    }
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
        bs: "",
        az: "",
        ug: "",
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
      case "bs":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].bs = ayah.text;

          i++;
        });
        break;
      case "az":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].az = ayah.text;

          i++;
        });
        break;
      case "ug":
        i = 0;
        data[1].ayahs.forEach((ayah) => {
          surah[i].ug = ayah.text;

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
                <div class="no-ayat"  data-id="${i-1}">
                    ${i}
                </div>
                
                <a class="text text-dark"><i class="fas fa-star fa-lg" data-id="${i}" id="star"></i></a>
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
                <div class="yazi-arab2">${ayah.ur}</div>
                <div class="yazi-tr">${ayah.hi}</div>
                <div class="yazi-tr">${ayah.bs}</div>
                <div class="yazi-tr">${ayah.az}</div>
                <div class="yazi-arab2">${ayah.ug}</div>
            </div>
        </li>`;

      $("#list-ayah").append(elementList);

      i++;
    });
    const footer = `<footer id="footer" class=" py-1 bg-dark text-white-50" style="font-family: 'mequran'; z-index:-1">
      <img src="./assets/image/line.png" style="max-width: 250px; padding-bottom: 20px;"></img><br>
     <span>صَدَقَ اللّهُ العَظِيمُ</span> 
  
  </footer>`
    $("#list-ayah").append(footer);

    $(".no-ayat").click((e) => {
      methodPlay2(e);
    });
    $(".fa-stop").click((e) => {
      stopAudio(e);
    });
    $(".fa-star").click((e) => {
      const toast = document.querySelector(".toast-not");
      toast.style.visibility = "visible";
      methodBookmark(e);
    });

    if (url.search("#") != -1) {
      document.getElementById(no_a).scrollIntoView();
    }
  };

  let isPlaying = false;
  let currentAudioIndex = 0;


  const methodPlay = () => {
    if (!isPlaying) {
      playAudio(currentAudioIndex);
    } else {
      stopAudio();
    }
  };

  const methodPlay2 = (e) => {
    //onAudio();
    playAudio($(e.target).attr("data-id"));
  };

  const playAudio = (no) => {
    if (isPlaying) {
      stopAudio();
    }

    const audioAyah = document.querySelector(".audioAyah");
    if (audioAyah) {
      audioAyah.remove();
    }

    const el = `<audio id="surahPlayer" src="${surah[no].audio}" type="audio/mp3" controls="controls" class="audioAyah"></audio>`;
    $(".container").append(el);

    const audioElement = document.getElementById("surahPlayer");
    audioElement.play();

    updateListProgress(no); // Call the updateListProgress function

    currentAudioIndex = no;

    audioElement.addEventListener("ended", () => {
      stopAudio();
      currentAudioIndex++;
      if (currentAudioIndex < totalAyat) {
        playAudio(currentAudioIndex);
      }
    });

    isPlaying = true;
    updatePlayButton(); // Update the play button to a pause button
  };

  const updateListProgress = (no) => {
    const calanSure = document.getElementsByClassName("list-item");
    // Reset the style for all list items
    for (let i = 0; i < calanSure.length; i++) {
      calanSure[i].setAttribute(
        "style",
        "background-color: none; border: 0px 1px 1px 1 px 1px solid grey; filter: blur(4px)"
      );
      document.querySelector('#surahPlayer').style.display = "none";

    }

    

    // Set the style for the currently playing item
    calanSure[no].setAttribute(
      "style",
      "background-color: lightgrey; border: 0px 1px 1px 1px solid grey"
    );
    // Scroll to the currently playing item
    calanSure[no].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    

  };

  const stopAudio = () => {
    const audioAyah = document.getElementById("surahPlayer");
    if (audioAyah) {
      audioAyah.pause();
      audioAyah.currentTime = 0;
      audioAyah.remove();
    }
    isPlaying = false;

    const calanSure = document.getElementsByClassName("list-item");
    for (let i = 0; i < calanSure.length; i++) {
      calanSure[i].setAttribute(
        "style",
        "background-color: none; border: 0px 1px 1px 1px solid grey"
      );
    }
    updatePlayButton(); // Update the pause button to a play button
  };

  const updatePlayButton = () => {
    const playButton = document.getElementById("playButton");
    if (isPlaying) {
      playButton.innerHTML = '<i class="fa fa-pause fa-sm"></i> ';
      playButton.classList.remove("play");
      playButton.classList.add("pause");
      playButton.style.opacity = "0.3";

    } else {
      playButton.innerHTML = '<i class="fa fa-play fa-sm"></i> ';
      playButton.classList.remove("pause");
      playButton.classList.add("play");
      playButton.style.opacity = "1.0";

    }
  };

  // Event listener for the play button
  document.getElementById("playButton").addEventListener("click", methodPlay);

  // Event listener for the play button
  document.getElementById("playButton").addEventListener("click", methodPlay);

  const methodBookmark = (e) => {
    const bookmarkObj = {
      surah: no_s,
      ayat: $(e.target).attr("data-id"),
    };

    // Check if the bookmark already exists
    if (!checkBookmark(bookmarkObj)) {
      addData(bookmarkObj);
      $(".toast-not").toast("show");
      $(e.target).addClass("yellow-star");
    } else {
      $(".toast-existed").toast("show");
    }

    // Change the style of the element (e.g., add yellow star)
  };

  const checkBookmark = (bookmarkObj) => {
    // Read the data object where bookmarks are stored
    const bookmarks = getData();

    // Check if the bookmark object exists in the bookmarks data
    const exists = bookmarks.some((bookmark) => {
      return (
        bookmark.surah === bookmarkObj.surah &&
        bookmark.ayat === bookmarkObj.ayat
      );
    });

    return exists;
  };

  const getData = () => {
    // Retrieve the data object from storage (replace with your actual storage mechanism)
    const data = localStorage.getItem("bookmark");

    // Parse the data object if it exists, or initialize an empty array
    const bookmarks = data ? JSON.parse(data) : [];

    return bookmarks;
  };

  const addData = (bookmarkObj) => {
    // Retrieve existing bookmarks
    const bookmarks = getData();

    // Add the new bookmark object to the array
    bookmarks.push(bookmarkObj);

    // Save the updated bookmarks array to storage (replace with your actual storage mechanism)
    localStorage.setItem("bookmark", JSON.stringify(bookmarks));
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
  nav.style.display = "none";
}


