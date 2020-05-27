const $aniBox1 = document.querySelector('.aniBox1');
const $aniBox2 = document.querySelector('.aniBox2');
const $aniBox3 = document.querySelector('.aniBox3');
const $aniBox4 = document.querySelector('.aniBox4');
const $aniBoxArea = document.getElementById('aniBoxArea');
// const aniClick = $aniBox;

$aniBox1.onclick = function() {
    for(let i = 0; i < 1; i++){
        if(i < 1){
            this.style.transform = 'rotate(180deg)';
            this.style.background = 'yellow';
            this.style.transtion = '1s';
        }
    }      
};
// $aniBox1.onclick = function() {
//     for(let i = 0; i < 1; i++){
//         if(i < 0){
//             this.style.transform = 'rotate(-180deg)';
//             this.style.background = 'orange'; 
//         }
//     }      
// };

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