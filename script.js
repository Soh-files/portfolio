document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('head-title').classList.add('show');

    // モバイル画面のメニュー開閉
    const $menuBtn = document.getElementById('menuBtn');
    const $mobileMenu = document.getElementById('mobileMenu');

    $menuBtn.addEventListener('click', function(e) {
       e.preventDefault();
       this.classList.toggle('open');
       $mobileMenu.classList.toggle('open');
    });

    // 画面下部のボタンでページトップに戻る
    let pageHeight;
    document.addEventListener('scroll', function(){
        pageHeight = window.pageYOffset;
    });

    const $topBtn = document.getElementById('top-btn');
    let timer = null;

    function setTimer () {
        if (pageHeight === 0) {
            clearInterval(timer);
        }
        window.scrollTo(0, pageHeight - 200);
    }
    $topBtn.addEventListener('click', function () {
        timer = setInterval(setTimer, 10);
    });
    

});