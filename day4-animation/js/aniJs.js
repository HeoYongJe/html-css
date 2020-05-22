const $aniBox = document.querySelector('.aniBox');
const $aniBoxArea = document.getElementById('aniBoxArea');
const aniClick = $aniBox;

$aniBox.onclick = function(event) {
    for(let i = 0; i < $aniBoxArea.length; i++){
        if($aniBoxArea < 1){
            this.style.transform = 'rotate(180deg)';
            this.style.background = 'yellow';
            this.style.transtion = '1s';
        }
        else{
            this.style.transform = 'rotate(-180deg)';
            this.style.background = 'orange';                
        }
    }      
};

console.log(event.target)

$aniBox.addEventListener('click', event => {
    for(let i = 0; i < $aniBox.length; i++){
        if($aniBox < 2){
            this.style.transform = 'rotate(180deg)';
            this.style.background = 'yellow';
            this.style.transtion = '1s';
        }
        else{
            this.style.transform = 'rotate(-180deg)';
            this.style.background = 'orange';                
        }
    }      
});