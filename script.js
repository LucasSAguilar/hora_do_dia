var mensagem = document.getElementById ('horas')
var img = document.getElementById ('foto')
var data = new Date ()
var hora = data.getHours()

function Horario () {

if (hora >= 6 && hora < 12) {

    img.src = 'img/manha.png'
    mensagem.innerHTML = 'Agora são ' + hora + ' horas'
    document.body.style.background = '#a8ae59'
}

else if (hora >= 12 && hora < 18 ) {

    img.src = 'img/tarde.png'
    mensagem.innerHTML = 'Agora são ' + hora + ' horas'
    document.body.style.background = '#936541'

}

else {

img.src = 'img/noite.png'
mensagem.innerHTML = 'Agora são ' + hora + ' horas'
document.body.style.background = '#1c406d'
}
}