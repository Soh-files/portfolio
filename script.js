document.addEventListener('DOMContentLoaded', function() {
    // ページが読み込まれたときに「KAura」を表示する
    // const headTitle = document.getElementById('head-title');
    // window.addEventListener('load', function () {
    //     headTitle.classList.add('show');
    // })

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

    // コンテンツの見出しを1文字ずつアニメーションする
    const animationTargetElements = document.querySelectorAll('.animationTitle');
    const titleLine = document.querySelectorAll('.title-bg-anime');

    for (let i = 0; i < animationTargetElements.length; i++) {
        const targetElement = animationTargetElements[i];
        const texts = targetElement.textContent;
        const textsArray = [];

        targetElement.textContent = '';

        for (let j = 0; j < texts.split('').length; j++) {
            const t = texts.split('')[j];
            if (t === ' ') {
                textsArray.push(' ');
            } else {
                textsArray.push('<span style="animation-delay: ' + ( j * 0.1 + 1 ) + 's;">' + t + '</span>');
            }
        }
        
        for (let k = 0; k < textsArray.length; k++) {
            targetElement.innerHTML += textsArray[k];
        }
    }

    // 見出しのアニメーションをスクロールしたときに開始するようにする
    document.addEventListener('scroll', function() {
        for (let l = 0; l < animationTargetElements.length; l++) {
            const getElementDistance = animationTargetElements[l].getBoundingClientRect().top + animationTargetElements[l].clientHeight * 0.6;
            if(window.innerHeight > getElementDistance) {
                animationTargetElements[l].classList.add('showAnime');
            }
        }
        for (let n = 0; n < titleLine.length; n++) {
            const getTitleDistance = titleLine[n].getBoundingClientRect().top + titleLine[n].clientHeight;
            if(window.innerHeight > getTitleDistance) {
                titleLine[n].classList.add('showAnime');
            }
        }
    });

    const scrollAnimeTarget = document.querySelectorAll('.scrollAnime');
    document.addEventListener('scroll', function () {
        for(let m = 0; m < scrollAnimeTarget.length; m++) {
            const scrollTargetDistance = scrollAnimeTarget[m].getBoundingClientRect().top + scrollAnimeTarget[m].clientHeight * 0.8;
            if(window.innerHeight > scrollTargetDistance) {
                scrollAnimeTarget[m].classList.add('showContent');
            }
        } 
    });
});