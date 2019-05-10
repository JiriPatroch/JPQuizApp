



/**
 * Hide current section and display next section.
 * 
 * @param {number} next 
 */
function displayNext(next) {

    let nextSectionName = '#item' + next;

    const actualSection = document.querySelector(nextSectionName);
    const actualHeading = actualSection.querySelector('h3');
    const actualLabel = actualSection.querySelector('label');
    const actualButton = actualSection.querySelector('button');
    const actualOptions = actualSection.querySelector('.options');
    const actualOption = actualSection.querySelectorAll('.options span');
    const errorLabel = document.querySelector('.error');


    actualSection.style.display = 'block';

    actualHeading.style.display = 'block';
    actualHeading.classList = 'fadeIn animated delay-1s';
    actualLabel.style.display = 'block';
    actualLabel.classList = 'fadeIn animated delay-1s';
    actualOptions.style.display = 'flex';

    actualOption.forEach((element, index) => {

        element.classList = `fadeIn animated slow delay-` + (index + 2) + `s`;
        selectOption(actualOption, element);

    });

    actualButton.classList = 'fadeIn animated delay-5s';

    setInterval(function () {
        actualButton.classList = 'shake animated';
    }, 10000);

    actualButton.addEventListener('click', () => {

        if (validateSelection(actualOption)) {

            progress.style.width = `${next * 33.333}%`;
            hideCurrent(actualSection);

            ++next
            displayNext(next);

        } else {

            errorLabel.style.display = 'block';

            setInterval(() => {
                errorLabel.style.display = 'none';
            }, 1500);

            return;

        }

    });
}

/**
 * Hide current section with fade out animation
 * 
 * @param {HTMLElement} currentSection Actual section 
 */
function hideCurrent(currentSection) {

    currentSection.classList = 'fadeOutLeft animated';

}

/**
 * Toggle the class from/to 'selected'
 * after click on element
 * 
 * @param {Array} options Array of actual options 
 * @param {HTMLElement} element Single option element
 * 
 * @return {Void} Void
 */
function selectOption(options, element) {

    element.addEventListener('click', (el) => {
        console.log(el.target.innerHTML);

        options.forEach((element, index) => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        });

        element.classList.add('selected');
    });
}

/**
 * Validates if section is selected
 * 
 * @param {Array} options Array of actual options  
 * 
 * @return {Bool} Boolean
 */
function validateSelection(options) {

    let isSelected = false;

    options.forEach((element, index) => {

        if (element.classList.contains('selected')) {

            isSelected = true;

        }

    });

    return isSelected;
}