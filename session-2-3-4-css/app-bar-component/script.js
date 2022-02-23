const appBarOptions = document.querySelector('#app-bar-options');
const headers = document.querySelectorAll('.header');
;
headers.forEach(header => header.classList.add('display-none'))

appBarOptions.addEventListener('change', setHeaderSelection);

function setHeaderSelection(e) {
    clearHeaderSelection(e.target.value);
}

function clearHeaderSelection(currentSelection) {
    console.log(currentSelection);
    
    headers.forEach(header => {
        console.log(header.classList.contains(currentSelection));
        if(header.classList.contains('show-header')) {
            header.classList.remove('show-header');
            header.classList.add('display-none');
        }
        else if(header.classList.contains(currentSelection)) {
            console.log(header)
            header.classList.add('show-header');
            header.classList.remove('display-none');
        }
    });
}

