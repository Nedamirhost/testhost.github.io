function playch() {
    var audio = document.getElementById("ch");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playaiga() {
    var audio = document.getElementById("aiga");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playfive() {
    var audio = document.getElementById("five");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playgashyk(){
    var audio = document.getElementById("gashyk");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}














function playsagan() {
    var audio = document.getElementById("sagan");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playkereksin() {
    var audio = document.getElementById("kereksin");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playtaspa() {
    var audio = document.getElementById("taspa");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playsagynam(){
    var audio = document.getElementById("sagynam");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

















function playkaspi() {
    var audio = document.getElementById("kaspi");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playprintsessa() {
    var audio = document.getElementById("printsessa");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playhymn() {
    var audio = document.getElementById("hymn");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}

function playkettik(){
    var audio = document.getElementById("kettik");
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0; // для перезапуска аудио с начала
      }
    
}




let chinaimg = document.querySelector('.china')
let igaimg = document.querySelector('.aiga_karap')
let fifethimg = document.querySelector('.fifeth')
let gashykpynimg = document.querySelector('.gashykpyn')
let saganimg = document.querySelector('.sagan')
let kereksinimg = document.querySelector('.kereksin')
let taspaimg = document.querySelector('.taspa')
let sagynamimg = document.querySelector('.sagynam')
let kaspiimg = document.querySelector('.kaspi')
let printsessaimg = document.querySelector('.printsessa')
let hymnimg = document.querySelector('.hymn')
let kettikimg = document.querySelector('.kettik')



chinaimg.addEventListener('mouseover', function(){
  anime({
    targets: '.china',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})

chinaimg.addEventListener('mouseout', function(){
  anime({
    targets: '.china',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})


igaimg.addEventListener('mouseover', function(){
  anime({
    targets: '.aiga_karap',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
igaimg.addEventListener('mouseout', function(){
  anime({
    targets: '.aiga_karap',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

fifethimg.addEventListener('mouseover', function(){
  anime({
    targets: '.fifeth',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
fifethimg.addEventListener('mouseout', function(){
  anime({
    targets: '.fifeth',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

gashykpynimg.addEventListener('mouseover', function(){
  anime({
    targets: '.gashykpyn',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
gashykpynimg.addEventListener('mouseout', function(){
  anime({
    targets: '.gashykpyn',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

saganimg.addEventListener('mouseover', function(){
  anime({
    targets: '.sagan',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
saganimg.addEventListener('mouseout', function(){
  anime({
    targets: '.sagan',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

kereksinimg.addEventListener('mouseover', function(){
  anime({
    targets: '.kereksin',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
kereksinimg.addEventListener('mouseout', function(){
  anime({
    targets: '.kereksin',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

taspaimg.addEventListener('mouseover', function(){
  anime({
    targets: '.taspa',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
taspaimg.addEventListener('mouseout', function(){
  anime({
    targets: '.taspa',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

sagynamimg.addEventListener('mouseover', function(){
  anime({
    targets: '.sagynam',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
sagynamimg.addEventListener('mouseout', function(){
  anime({
    targets: '.sagynam',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

kaspiimg.addEventListener('mouseover', function(){
  anime({
    targets: '.kaspi',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
kaspiimg.addEventListener('mouseout', function(){
  anime({
    targets: '.kaspi',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

printsessaimg.addEventListener('mouseover', function(){
  anime({
    targets: '.printsessa',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
printsessaimg.addEventListener('mouseout', function(){
  anime({
    targets: '.printsessa',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

hymnimg.addEventListener('mouseover', function(){
  anime({
    targets: '.hymn',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
hymnimg.addEventListener('mouseout', function(){
  anime({
    targets: '.hymn',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})

kettikimg.addEventListener('mouseover', function(){
  anime({
    targets: '.kettik',
    duration: 100,
    easing: 'linear',
    scale: 1.1
  })
})
kettikimg.addEventListener('mouseout', function(){
  anime({
    targets: '.kettik',
    duration: 100,
    easing: 'linear',
    scale: 1
  })
})













let irinakairatovna_1 = document.querySelector('.irinakairatovna')
irinakairatovna_1.addEventListener('mouseover', function(){
  anime({
    targets: '.irinakairatovna',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  irinakairatovna_1.style.background = '#833B3B'
})
irinakairatovna_1.addEventListener('mouseout', function(){
  anime({
    targets: '.irinakairatovna',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  irinakairatovna_1.style.background = '#806B6B'
})
irinakairatovna_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/%D0%98%D1%80%D0%B8%D0%BD%D0%B0_%D0%9A%D0%B0%D0%B9%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D0%BD%D0%B0')
})


let EdSheeran_1 = document.querySelector('.EdSheeran')
EdSheeran_1.addEventListener('mouseover', function(){
  anime({
    targets: '.EdSheeran',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  EdSheeran_1.style.background = '#833B3B'
})
EdSheeran_1.addEventListener('mouseout', function(){
  anime({
    targets: '.EdSheeran',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  EdSheeran_1.style.background = '#806B6B'
})
EdSheeran_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%80%D0%B0%D0%BD,_%D0%AD%D0%B4')
})

let Eminem_1 = document.querySelector('.Eminem')
Eminem_1.addEventListener('mouseover', function(){
  anime({
    targets: '.Eminem',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  Eminem_1.style.background = '#833B3B'
})
Eminem_1.addEventListener('mouseout', function(){
  anime({
    targets: '.Eminem',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  Eminem_1.style.background = '#806B6B'
})
Eminem_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/%D0%AD%D0%BC%D0%B8%D0%BD%D0%B5%D0%BC')
})

let TheWeekend_1 = document.querySelector('.TheWeekend')
TheWeekend_1.addEventListener('mouseover', function(){
  anime({
    targets: '.TheWeekend',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  TheWeekend_1.style.background = '#833B3B'
})
TheWeekend_1.addEventListener('mouseout', function(){
  anime({
    targets: '.TheWeekend',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  TheWeekend_1.style.background = '#806B6B'
})
TheWeekend_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/The_Weeknd')
})

let MOT_1 = document.querySelector('.MOT')
MOT_1.addEventListener('mouseover', function(){
  anime({
    targets: '.MOT',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  MOT_1.style.background = '#833B3B'
})
MOT_1.addEventListener('mouseout', function(){
  anime({
    targets: '.MOT',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  MOT_1.style.background = '#806B6B'
})
MOT_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%82_(%D1%80%D1%8D%D0%BF%D0%B5%D1%80)')
})

let Ramstein_1 = document.querySelector('.Ramstein')
Ramstein_1.addEventListener('mouseover', function(){
  anime({
    targets: '.Ramstein',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  Ramstein_1.style.background = '#833B3B'
})
Ramstein_1.addEventListener('mouseout', function(){
  anime({
    targets: '.Ramstein',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  Ramstein_1.style.background = '#806B6B'
})
Ramstein_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/Rammstein')
})

let Basta_1 = document.querySelector('.Basta')
Basta_1.addEventListener('mouseover', function(){
  anime({
    targets: '.Basta',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  Basta_1.style.background = '#833B3B'
})
Basta_1.addEventListener('mouseout', function(){
  anime({
    targets: '.Basta',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  Basta_1.style.background = '#806B6B'
})
Basta_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D1%82%D0%B0_(%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BD%D1%82)')
})

let Oxxxymiron_1 = document.querySelector('.Oxxxymiron')
Oxxxymiron_1.addEventListener('mouseover', function(){
  anime({
    targets: '.Oxxxymiron',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  Oxxxymiron_1.style.background = '#833B3B'
})
Oxxxymiron_1.addEventListener('mouseout', function(){
  anime({
    targets: '.Oxxxymiron',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  Oxxxymiron_1.style.background = '#806B6B'
})
Oxxxymiron_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/Oxxxymiron')
})

let ImagineDragons_1 = document.querySelector('.ImagineDragons')
ImagineDragons_1.addEventListener('mouseover', function(){
  anime({
    targets: '.ImagineDragons',
    duration: 400,
    easing: 'linear',
    scale: 1.2
  })
  ImagineDragons_1.style.background = '#833B3B'
})
ImagineDragons_1.addEventListener('mouseout', function(){
  anime({
    targets: '.ImagineDragons',
    duration: 400,
    easing: 'linear',
    scale: 1
  })
  ImagineDragons_1.style.background = '#806B6B'
})
ImagineDragons_1.addEventListener('click', function(){
  location.assign('https://ru.wikipedia.org/wiki/Imagine_Dragons')
})









let news_1 = document.querySelector('.news')
news_1.addEventListener('mouseover', function(){
  anime({
    targets: '.news',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

news_1.addEventListener('mouseout', function(){
  anime({
    targets: '.news',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})


let chill_1 = document.querySelector('.chill')
chill_1.addEventListener('mouseover', function(){
  anime({
    targets: '.chill',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

chill_1.addEventListener('mouseout', function(){
  anime({
    targets: '.chill',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

let training_1 = document.querySelector('.training')
training_1.addEventListener('mouseover', function(){
  anime({
    targets: '.training',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})
training_1.addEventListener('mouseout', function(){
  anime({
    targets: '.training',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

let sad_1 = document.querySelector('.sad')
sad_1.addEventListener('mouseover', function(){
  anime({
    targets: '.sad',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

sad_1.addEventListener('mouseout', function(){
  anime({
    targets: '.sad',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

let party_1 = document.querySelector('.party')
party_1.addEventListener('mouseover', function(){
  anime({
    targets: '.party',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

party_1.addEventListener('mouseout', function(){
  anime({
    targets: '.party',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

let hits_1 = document.querySelector('.hits')
hits_1.addEventListener('mouseover', function(){
  anime({
    targets: '.hits',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})
hits_1.addEventListener('mouseout', function(){
  anime({
    targets: '.hits',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})
let sleep_1 = document.querySelector('.sleep')
sleep_1.addEventListener('mouseover', function(){
  anime({
    targets: '.sleep',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})
sleep_1.addEventListener('mouseout', function(){
  anime({
    targets: '.sleep',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

let acousticks_1 = document.querySelector('.acousticks')
acousticks_1.addEventListener('mouseover', function(){
  anime({
    targets: '.acousticks',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})
acousticks_1.addEventListener('mouseout', function(){
  anime({
    targets: '.acousticks',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})
let twoth_1 = document.querySelector('.twoth')
twoth_1.addEventListener('mouseover', function(){
  anime({
    targets: '.twoth',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

twoth_1.addEventListener('mouseout', function(){
  anime({
    targets: '.twoth',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})


let happy_1 = document.querySelector('.happy')
happy_1.addEventListener('mouseover', function(){
  anime({
    targets: '.happy',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

happy_1.addEventListener('mouseout', function(){
  anime({
    targets: '.happy',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})
let russian_1 = document.querySelector('.russian')
russian_1.addEventListener('mouseover', function(){
  anime({
    targets: '.russian',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

russian_1.addEventListener('mouseout', function(){
  anime({
    targets: '.russian',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

let kazakh_1 = document.querySelector('.kazakh')
kazakh_1.addEventListener('mouseover', function(){
  anime({
    targets: '.kazakh',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1.05,
    width: 350
  })
})

kazakh_1.addEventListener('mouseout', function(){
  anime({
    targets: '.kazakh',
    duration: 500,
    delay: 100,
    easing: 'linear',
    scale: 1,
    width: 300
  })
})

