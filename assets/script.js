const indexPage = () => {
    $('#quran').click(() => {
        document.location.href = 'quran.html';
    });
    $('#time').click(() => {
        mevcutDegil();
    });
    $('#dua').click(() => {
        document.location.href = 'dua-list.html';
    });
    $('#sure').click(() => {
        document.location.href = 'sure-list.html';
    });
    $('#abdest').click(() => {
        document.location.href = 'abdest.html';
    });
    $('#settings').click(() => {
        mevcutDegil();
    });
    $('#bookmark').click(() => {
        document.location.href = 'bookmark.html';
    });
    $('#about').click(() => {
        document.location.href = 'about.html';
    });

    $('.full-screen').click(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }

    });

    const mevcutDegil = () => {
        alert('Sayfa mevcut değil');
    }
};

const duaListPage = () => {
    //dua-list.html
   
    let i = 1;
    dua.forEach((d) => {
        const html = `<li id="${i}" class="dua list-group-item list-group-item-success ">${d.name}</li>`;
        $('#list-dua').append(html);
        i++;
    })

    $('.dua').click((e) => {
        document.location.href = `dua.html?${$(e.target).attr('id')}`;
    });




};

const duaPage = () => {
    //dua.html
    const url = window.location.href;
    const id = url.substr(url.indexOf('?') + 1);

    d = dua[id - 1];

    $('.title').text(`${d.name}`);
    $('.baslik').text(`${d.name}`);
    $('.yazi-arab').text(d.arab);
    $('.yazi-en').text(d.turk);
    $('.yazi-turk').text(d.en);
};

const sureListPage = () => {
    //sure-list.html
    
    let i = 1;
    sure.forEach((d) => {
        const html = `<li id="${i}" class="sure list-group-item list-group-item-success ">${d.name}</li>`;
        $('#list-sure').append(html);
        i++;
    })

    $('.sure').click((e) => {
        document.location.href = `sure.html?${$(e.target).attr('id')}`;
    });




};

const surePage = () => {
    //sure.html
    const url = window.location.href;
    const id = url.substr(url.indexOf('?') + 1);

    d = sure[id - 1];

    $('.title').text(`${d.name}`);
    $('.baslik').text(`${d.name}`);
    $('.yazi-arab').text(d.arab);
    $('.yazi-en').text(d.turk);
    $('.yazi-turk').text(d.en);
};

const quranPage = () => {
    //Quran.html
    $.get('https://api.alquran.cloud/v1/surah', (data) => {
        contentList(data.data);
        $('.loading').css('display', 'none');
    });


    const contentList = (data) => {
        let i = 1;
        data.forEach((d) => {
            const elemenList = `<tr  class="">
                            <th class="td1" width="30"><div class="no_s">${i}</div> </th>
                            <td class="td2 strong name_s" no-surah="${d.number}">${d.englishName}</td>
                            <td class="td2 text-right">${d.numberOfAyahs} Ayet</td>
                        </tr>`;
            $('#list').append(elemenList);
            i++;
        });

        $('.name_s').click((e) => {
            document.location.href = `surah.html?${$(e.target).attr('no-surah')}`;
        });
    };

    $('.fa-bookmark').click((e) => {
        e.preventDefault();
        document.location.href = 'bookmark.html';
    });
};

const surahPage = () => {
    //Surah.html
    const url = window.location.href;
    let no_s = '';
    let no_a;
    
    if (url.search('#') != -1) {
        no_s = url.substring(url.indexOf('?') + 1, url.indexOf('#'));
        no_a = url.substr(url.indexOf('#') + 1);
    } else {
        no_s = url.substr(url.indexOf('?') + 1);
    }
    /* ru.kuliev ,  de.khoury  ,  */
    const url_api = `https://api.alquran.cloud/v1/surah/${no_s}/editions/ar.abdulsamad,tr.vakfi,en.asad`;
    let surah = [];
    let jmlAyah;



    $.get(url_api, (data) => {
        isiData(data.data);
        jmlAyah = data.data[0].numberOfAyahs;
        $('.loading').css('display', 'none');
        $('.baslik').text(`${data.data[0].englishName}`);
        $('#title').text(`${data.data[0].englishName}`);
    });

    const isiData = (data) => {
        for (let i = 0; i < data[0].numberOfAyahs; i++) {
            const obj = {
                arab: '',
                turk: '',
                en: '',            
                audio: ''

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

        i = 0;
        data[1].ayahs.forEach((ayah) => {
            surah[i].turk = ayah.text;

            i++;
        });

        // i = 0;
        // data[2].ayahs.forEach((ayah) => {
        //     surah[i].en = ayah.text;

        //     i++;
        // });
        /*
        i = 0;
        data[3].ayahs.forEach((ayah) => {
            surah[i].ru = ayah.text;

            i++;
        });
        */
        showData();
    };

    const showData = () => {
        i = 1;
        surah.forEach((ayah) => {
            const elementList =
                `<li class="list-item" id="${i}">
            <div class="item-icon">
                <div class="no-ayat">
                    ${i}
                </div>
                <a class="text text-success"><i class="fas fa-play fa-lg" data-id="${i}"></i></a><br> 
                <a class="text text-dark"><i class="fas fa-bookmark fa-lg" data-id="${i}"></i></a>
            </div>
            <div class="item-yazi">
                <div class="yazi-arab">${ayah.arab}</div>
                <div class="yazi-tr">${ayah.turk}</div>
                <div class="yazi-en">${ayah.en}</div>
                <div class="yazi-en" style="display: none;">${ayah.ru}</div>
            </div>
        </li>`;

            $('#list-ayah').append(elementList);

            i++;
        });

        $('.fa-play').click((e) => {
            methodPlay(e)
        });
        $('.fa-bookmark').click((e) => {
            methodBookmark(e)
        });



        if (url.search('#') != -1) {
            document.getElementById(no_a).scrollIntoView();
        }
    }


    

    const methodPlay = (e) => {
        //onAudio();
        playAudio($(e.target).attr('data-id'));
    };

    let sedangDimainkan = false;
    
    const playAudio = (no) => {
        if(sedangDimainkan){
            stopAudio();
        }
        const el = `<audio id="surahPlayer" src="${surah[no-1].audio}" type="audio/mp3" controls="controls" class="audioAyah audioAyah${no}"></audio>`;
        $('.list-audio').append(el);

        const audioAyah = document.querySelector(`.audioAyah${no}`);
        audioAyah.play();
        no++;

        if (no <= jmlAyah) {
            audioAyah.addEventListener('ended', () => {
                playAudio(no);
            });
        }

        if(no == jmlAyah){
            sedangDimainkan = true;
        }

    };

    const methodBookmark = (e) => {
        const bookmarkObj = {
            surah: no_s,
            ayat: $(e.target).attr('data-id'),            
        };
        addData(bookmarkObj);
        $('.toast').toast('show');
    };

    $('.fa-stop').click(() => {
        stopAudio();
    });

    

    const stopAudio = () => {
        const audioAyah = document.querySelectorAll('.audioAyah');
        audioAyah.forEach((audAy) => {
            audAy.pause();
            audAy.currentTime = 0;
        });
        sedangDimainkan = true;
    };

    

    const onAudio = () => {
        i = 1;
        surah.forEach((ayah) => {
            const el = `<audio id="surahPlayer" src="${ayah.audio}" type="audio/mp3" controls="controls" class="audioAyah audioAyah${i}"></audio>`;
            $('.list-audio').append(el);
            i++;
        });

    };
};

const bookmarkPage = () => {
    const data = readData();
    let i = 0;
    data.forEach((d) => {
        const html = `<li class="bookmark list-group-item d-flex justify-content-between align-items-center mt-3" data-surah="${d.surah}" data-ayat="${d.ayat}" index="${i}" id="${i}">
        ${d.surah}:${d.ayat}
        <span class="badge badge-danger badge-pill">X</span>
    </li`;
        $('#list-bookmark').append(html);
        i++;
    })

    $('.bookmark').click((e) => {
        document.location.href = `surah.html?${$(e.target).attr('data-surah')}#${$(e.target).attr('data-ayat')}`;
    });
    $('.bookmark span').click((e) => {
        e.stopPropagation();
        const id = $(e.target.parentElement).attr('index');
        deleteData(id);
        $('li').remove(`#${id}`);
    });

    




};