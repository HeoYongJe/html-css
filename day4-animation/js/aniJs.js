const $aniBoxLi = document.querySelectorAll('.aniBox')
const $aniBox1 = document.querySelector('.aniBox1');
const $aniBox2 = document.querySelector('.aniBox2');
const $aniBox3 = document.querySelector('.aniBox3');
const $aniBox4 = document.querySelector('.aniBox4');
const $aniBoxArea = document.getElementById('aniBoxArea');

// const aniClick = $aniBox;
// const isListOpen = () => ([...$aniBoxArea > li.classList].includes('listOpen'));
$aniBoxLi.mousenter = function() {

    for(let i = 0; i < $aniBoxArea.length; i++){
        if(i < 1){
            this.style.transform = 'rotate(180deg)';
            this.style.background = 'yellow';
            this.style.transtion = '1s';
        }
        else{
            $aniBoxLi.mouseleave;
            this.style.transform = 'rotate(-180deg)';
            this.style.background = 'blue';                
        }
    };
};