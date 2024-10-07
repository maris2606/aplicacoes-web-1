const img_bicho =  document.getElementById('img_bicho');

const frames = [
    'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png',
    'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png'
]

let index = 0;
let distancia = 0;

setInterval(function (){
    img_bicho.setAttribute('src', frames[index]);

    index = (index == 1) ? 0 : (index + 1);

    distancia += 5;
    img_bicho.style.left = distancia+'px';

}, 500);