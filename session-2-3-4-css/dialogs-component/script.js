let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', openDialog));



function openDialog(e) {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target;
    const main = target.parentElement;

    const dialogType =  target.getAttribute('data-dialog');
    const dialog = document.querySelector(`.${dialogType}`);
    dialog.classList.remove('display-none');
    main.classList.add('dialog-open');

    main.addEventListener('click', closeDialog);
    const actionButtons = dialog.querySelectorAll('a.action-btn');
    actionButtons.forEach(actionButton => actionButton.addEventListener('click', closeDialog));
}

function closeDialog(e) {
    e.preventDefault();
    const target = e.target;
    console.log(target);

    if(target.classList.contains('dialog-open')) {
        const dialogs = target.querySelectorAll('.dialog');
        console.log(dialogs);
        dialogs.forEach(dialog =>  {
            if(!dialog.classList.contains('display-none')) {
                dialog.classList.add('display-none');
            }
        })
        target.classList.remove('dialog-open')
    }
    
    if(e.target.classList.contains('action-btn')) {
        e.stopPropagation();
        const parent = e.target.parentElement.parentElement;
        parent.classList.toggle('dialog-open');
        parent.classList.toggle('display-none');
        document.querySelector('.main').classList.toggle('dialog-open');
    }
    
}