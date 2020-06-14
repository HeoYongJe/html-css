const $aniBox1 = document.querySelector('.aniBox1');
const $aniBox2 = document.querySelector('.aniBox2');
const $aniBox3 = document.querySelector('.aniBox3');
const $aniBox4 = document.querySelector('.aniBox4');
const $aniBoxArea = document.getElementById('aniBoxArea');
// const aniClick = $aniBox;
const isListOpen = () => ([...$aniBoxArea > li.classList].includes('listOpen'));
function setListOpenStatus() {
    for(let i = 0; i < $aniBoxArea.length; i++){
        if(){
            this.style.transform = 'rotate(180deg)';
            this.style.background = 'yellow';
            this.style.transtion = '1s';
        }
        else{
            this.style.transform = 'rotate(-180deg)';
            this.style.background = 'blue';                
        }
    }      
};

$aniBoxArea.addEventListener('click', () => setListOpenStatus(isListOpen()));
// console.log(event.target)

// $aniBox.addEventListener('click', event => {
//     for(let i = 0; i < $aniBox.length; i++){
//         if(){
//             this.style.transform = 'rotate(180deg)';
//             this.style.background = 'yellow';
//             this.style.transtion = '1s';
//         }
//         else{
//             this.style.transform = 'rotate(-180deg)';
//             this.style.background = 'orange';                
//         }
//     }      
// });