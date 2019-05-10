document.addEventListener("DOMContentLoaded", function () {

    (function startApp() {

        const startH2 = document.querySelector('.start h2');
        const startBtn = document.querySelector('.start button');
        const progress = document.querySelector('#progress');
        let next = 0;

        startH2.classList = 'fadeInLeft animated';
        startBtn.classList = 'fadeIn animated slow delay-1s';

        startBtn.addEventListener('click', () => {

            document.querySelector('.start').classList = 'fadeOutLeft animated';

            ++next

            displayNext(next);

        });

    })();

})