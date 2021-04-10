var convertBtn = document.querySelector('.button');
var URLinput = document.querySelector('.input');

convertBtn.addEventListener('click', () => {
    sendURL(URLinput.value);
});

function sendURL(URL) {
    window.location.href = `https://downtube-server.herokuapp.com/download?URL=${URL}`;
}