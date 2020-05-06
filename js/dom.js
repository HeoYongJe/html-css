const $elem = document.getElementById('b')
$elem.style.color = 'red'

const $elem1 = document.querySelector('.b')
$elem1.style.color = 'red'

const $elem2 = document.getElementsByClassName('fru');
console.log($elem2);
for (let i = 0; i < $elem2.length;i++){
  $elem2[i].className = 'blue';
}
console.log($elem2);