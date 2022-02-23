const inputForm = document.querySelector('.input-chip-text');
inputForm.addEventListener('focus', translateLabel);
inputForm.addEventListener('blur', translateLabel);

function translateLabel (e) {
    const parent = e.target.parentElement.parentElement; 
    const len = parent.querySelector('.chip-container').querySelectorAll('.chip').length;
    if(e.type === 'blur') {
        if(len === 0)
            parent.querySelector('label').classList.remove('translate-label')
    }
    else {
        parent.querySelector('label').classList.add('translate-label')
    }
}

// inputForm.addEventListener('blur', (e) => {

// });

            inputForm.addEventListener('keydown', addChip);
            function addChip(e) {
                if(e.keyCode === 13) {
                    const chipText = e.target.value;
                    const input = e.target;
                    const chip = document.createElement('div');
                    chip.innerHTML += `${chipText}<i class="fas fa-times cross-icon"></i>`;
                    chip.classList.add('chip');

                    chip.querySelector('.cross-icon').addEventListener('click', removeChip);

                    e.target.parentElement.insertBefore(chip, input);
                    e.target.value = '';
                    e.target.focus();
                }
            }

function removeChip(e) {
    const chipInputForm =  e.target.parentElement.parentElement.parentElement;
    const chipContainer = e.target.parentElement.parentElement;


    const chip = e.target.parentElement;
    chip.remove();
    if(chipContainer.querySelectorAll('.chip').length === 0) {
        chipInputForm.querySelector('label').classList.remove('translate-label')
    }
    e.target.focus();
}

 
