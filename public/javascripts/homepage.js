let createBtn = document.getElementById('create')
let createCloseBtn = document.getElementById('exit')
let createConfirmBtn = document.getElementById('startconfirm')
let joinMeetBtn = document.getElementById('joinmeet')
let joinMeetCloseBtn = document.getElementById('back')

function init(){
    createBtn.addEventListener('click', function() {
        document.getElementsByClassName('popup-start')[0].classList.add('popup-active');
    });
    createCloseBtn.addEventListener('click', function() {
        document.getElementsByClassName('popup-start')[0].classList.remove('popup-active');
    });

    createConfirmBtn.onclick = ()=>{
        window.location.href = '/stream'
    }
    
    joinMeetBtn.addEventListener('click', function() {
        document.getElementsByClassName('popup-join')[0].classList.add('popup-active');
    });

    joinMeetCloseBtn.addEventListener('click', function() {
        document.getElementsByClassName('popup-join')[0].classList.remove('popup-active');
    });

}
init()