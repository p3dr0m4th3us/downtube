var convertBtn = document.querySelector('.button');
var URLinput = document.querySelector('.input');
var div = document.querySelector('div')

convertBtn.addEventListener('click', () => {
    sendURL(URLinput.value);
    var p = document.querySelector('p')
    if (!p){
        var p = document.createElement('p')
        p.innerHTML = "Seu vídeo será baixado em breve."
        div.appendChild(p)
    }
    
    
});

function sendURL(URL) {
    window.location.href = `https://downtube-server.herokuapp.com/download?URL=${URL}`;
}