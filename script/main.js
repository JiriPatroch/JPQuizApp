document.addEventListener("DOMContentLoaded", function () {

    (function startApp() {

        /**
         * Start section constants
         */
        const startH2 = document.querySelector('.start h2');
        const startBtn = document.querySelector('.start button');
        let next = 0;


        startH2.classList = 'fadeInLeft animated';
        startBtn.classList = 'fadeIn animated slow delay-1s';


        startBtn.addEventListener('click', () => {

            document.querySelector('.start').classList = 'fadeOutLeft animated';

            ++next
            displayNext(next);

        });



        function displayNext(next) {

            let nextSextionName = '#item' + next;

            const actualSection = document.querySelector(nextSextionName);
            const actualHeading = actualSection.querySelector('h3');
            const actualButton = actualSection.querySelector('button');
            const actualOptions = actualSection.querySelector('.options');
            const actualOption = actualSection.querySelectorAll('.options span');


            actualSection.style.display = 'block';

            actualHeading.style.display = 'block';
            actualHeading.classList = 'fadeIn animated delay-1s';
            actualOptions.style.display = 'flex';

            actualOption.forEach((element, index) => {

                element.classList = `fadeIn animated slow delay-` + (index + 2) + `s`;
                selectOption(actualOption, element)

            });

            actualButton.classList = 'fadeIn animated delay-5s';

            setInterval(function () {
                actualButton.classList = 'shake animated';
            }, 10000);

            actualButton.addEventListener('click', () => {

                hideCurrent(actualSection);
                ++next
                displayNext(next);

            });
        }




        function hideCurrent(currentSection) {

            currentSection.classList = 'fadeOutLeft animated';

        }



        /**
         * This function will toggle the class from/to 'selected'
         * after click on element
         * 
         * @param {*} actualOption Array of actual options 
         * @param {*} element Single option element
         * 
         * @return {Void} Void
         */
        function selectOption(actualOption, element) {
            element.addEventListener('click', (el) => {
                console.log(el.target.innerHTML);

                actualOption.forEach((element, index) => {
                    if (element.classList.contains('selected')) {
                        element.classList.remove('selected');
                    }
                });

                element.classList.add('selected');
            });
        }

















    })();

})

        // startBtn.addEventListener('click', () => {

        //     document.querySelector('.start').classList = 'fadeOutLeft animated';

        //     firstSection.style.display = 'block';
        //     //firstSection.classList = 'fadeIn animated delay-1s';

        //     firstH3.style.display = 'block';
        //     firstH3.classList = 'fadeIn animated delay-1s';
        //     firstOptions.style.display = 'flex';

        //     firstOption.forEach((index, element) => {

        //         index.classList = `fadeIn animated slow delay-` + (element + 2) + `s`;
        //         index.innerHTML = element;

        //     });

        //     firstBtn.classList = 'fadeIn animated delay-5s';

        //     setInterval(function () {
        //         firstBtn.classList = 'shake animated';
        //     }, 10000);



        // });




        // function displayNext() {


        //     firstSection.style.display = 'block';

        //     firstH3.style.display = 'block';
        //     firstH3.classList = 'fadeIn animated delay-1s';
        //     firstOptions.style.display = 'flex';

        //     firstOption.forEach((index, element) => {

        //         index.classList = `fadeIn animated slow delay-` + (element + 2) + `s`;
        //         index.innerHTML = element;

        //     });

        //     firstBtn.classList = 'fadeIn animated delay-5s';

        //     setInterval(function () {
        //         firstBtn.classList = 'shake animated';
        //     }, 10000);
        // }