// const $aniBoxArea = document.getElementById('aniBoxArea');
const $aniBox = document.querySelector('.aniBox');
const aniClick = $aniBox;

$aniBox.onclick = function() {
    for(let i = 0; i < $aniBox.length; i++){
        if(aniClick > 1){
            aniClick.style.transform = 'rotate(180deg)';
            aniClick.style.background = 'yellow';
            aniClick.style.transtion = '1s';
        }
        else{
            aniClick.style.transform = 'rotate(-180deg)';
            aniClick.style.background = 'orange';                
        }
    }
        
;}
aniClick();



