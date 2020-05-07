const $elem = document.getElementById('b')
$elem.style.color = 'red'

const $elem1 = document.querySelector('.b')
$elem1.style.color = 'red'

const $elem2 = document.getElementsByClassName('fru');
console.log($elem2);
for (let i = 0; i < $elem2.length;i++){
  // let i = $elem2.length -1; i >= 0; i--
  $elem2[i].className = 'orange';
}
console.log($elem2);
// 위와 같이 포문을 돌릴경우 모두 모두 선택이 될 줄 알았는데, 사과 메론 포도만 적용이 되었다.
// HTMLCollection 객체는 실시간으로 노드 객체의 상태 변경을 반영하는 살아있는 돔 컬렉션 객체이다.
// 그래서 0번째 요소가 적용됨으로써 실시간으로 제외가 되어 5개에서 돌리는 것이 아닌
// 이미나온 사과를 제외한 나머지 4개에서 돌기때문에 참외가 0번째가 되므로 i++로 1이되었기때문에 
// 참외가 포함이 안되고 메론이 되는 것이다.
// * getElementsByClassName 대신에 querySelectorAll(non-live)을 사용하면 원하는 결과를 얻을 수 있다.


const $foo = document.getElementById('foo').textContent ='hi';

const $innerNode = document.getElementById('innerNode');

$innerNode.innerHTML += '';
//노드삭제
$innerNode.innerHTML += '<li class="banana">banana</li>'
//노드 추가
$innerNode.innerHTML = '<li class="orange">orange</li>'
//노드교체

$innerNode.insertAdjacentHTML('afterbegin','<li class="remon">remon</li>')