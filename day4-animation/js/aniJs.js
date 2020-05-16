const $aniBoxArea = document.getElementById('aniBoxArea');
const $aniBox = document.querySelector('.aniBox');

$aniBox.onclick = function(rotate){
    if(rotate){
        this.style.transform = 'rotate(180deg)';
        this.style.background = 'yellow';
        this.style.transtion = '1s';
    }
    else{
        this.style.transform = 'rotate(-180deg)';
        this.style.background = 'orange';
    }
}
const $aniBoxchildren = new rotate;


