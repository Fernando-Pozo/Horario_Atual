function relogio() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (hora < 10){
        hora = "0" + hora;
    }
    if (minutos < 10){
        minutos = "0" + minutos;
    }
    if (segundos < 10){
        segundos = "0" + segundos;
    }
    window.document.getElementById("HorarioAtual").innerHTML=hora+':'+minutos+':'+segundos;
}
window.setInterval("relogio()",1000);

function img() {
    var img = window.document.getElementById("imagem");

    if (relogio() >= 0 && relogio() < 12){
        //Bom dia
        document.body.style.backgroundColor = '#e2cd9f';
        img.src = 'img/manha.jpg';

    }else if (relogio() >= 12 && relogio() <= 18){
        //Boa tarde
        document.body.style.backgroundColor = '#b9846f';
        img.src = 'img/tarde.jpg';
    }else {
        //Boa Noite
        document.body.style.backgroundColor = '#515154';
        img.src = 'img/noite.jpg';

    }

}

