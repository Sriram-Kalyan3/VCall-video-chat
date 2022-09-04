document.getElementById('create').addEventListener('click', function() {
    document.getElementsByClassName('popup-start')[0].classList.add('popup-active');
});
document.getElementById('exit').addEventListener('click', function() {

    document.getElementsByClassName('popup-start')[0].classList.remove('popup-active');
});

document.getElementById('joinmeet').addEventListener('click', function() {
    document.getElementsByClassName('popup-join')[0].classList.add('popup-active');
});
document.getElementById('back').addEventListener('click', function() {
    document.getElementsByClassName('popup-join')[0].classList.remove('popup-active');
});