// const $btn01 = document.querySelector('.btn01');

// $btn01.onclick = function(){
//   alert('경고창입니다');
// };

// $btn01.onblur = function(){
//   this.style.color = 'blue';
// }
// const btnA = new $btn01;

const $button = document.querySelector('.btn01');

    // 이벤트 핸들러 프로퍼티 방식
    // $button.onclick = function () {
    //   console.log('[이벤트 핸들러 프로퍼티 방식]button click');
    // };

    // addEventListener 메소드 방식
    $button.addEventListener('click', function () {
      console.log('[addEventListener 메소드 방식]button click');
    });
    $button.addEventListener('click', function () {
      console.log('하나 이상의 이벤트 핸들러를 등록 할 수 있으며, 순서대로 호출');
    });

    const $msg = document.querySelector('.message');

    function showMsg(e){
      $msg.textContent = `안 녕 하 세 요`;
    }

    window.onclick = showMsg;


    const $checkbox = document.querySelector('input[type=checkbox]');
    const $change = document.querySelector('.change');

    $checkbox.onchange = function(e){
      $change.textContent = e.target.checked ? `on` : `off`;
    };