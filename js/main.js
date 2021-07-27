let paragraf = document.querySelector('p');
let button_d = document.getElementById('dodaj');
document.getElementById('dodaj').onclick = function () {
    paragraf.textContent = 'przykładowy tekst';
}
let button_u = document.getElementById('usun');
document.getElementById('usun').onclick = function () {
    paragraf.textContent = '';
}