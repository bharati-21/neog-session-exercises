const drawerItems = document.querySelectorAll('.drawer-item');
const hamurgerIcon = document.querySelectorAll('.hamburger-icon');
const dismissableDrawer = document.querySelector('.dismissible');
const modalDrawer = document.querySelector('.modal');
const modalContent = document.querySelector('.modal > .content');

drawerItems.forEach(drawerItem => drawerItem.addEventListener('click', toggleDrawerActive));
hamurgerIcon.forEach(hamburger => hamburger.addEventListener('click', toggleDrawer));

function toggleDrawerActive(e) {
    const target = e.target;
    const drawer = target.parentElement.parentElement;
    const drawerContainers = drawer.querySelectorAll('.drawer-main');
    drawerContainers.forEach(drawerContainer => {
        const items = drawerContainer.querySelectorAll('.drawer-item');
        removeActiveItem(items, target);
    })

    target.classList.toggle('active-item');
}

function removeActiveItem(items, target) {
    items.forEach(item => {
        if(target!== item && item.classList.contains('active-item')) {
                item.classList.remove('active-item');
            }
    });
}

function toggleDrawer(e) {
    const target = e.target;
    const parent = target.parentElement.parentElement.parentElement;
    const drawer = parent.querySelector('.drawer');
    drawer.classList.toggle('display-none');

    if(parent.classList.contains('modal') && !drawer.classList.contains('display-none')) {
        parent.classList.add('drawer-open');
    }
}


modalContent.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.parentElement;
    if(parent.classList.contains('drawer-open')) {
        parent.classList.remove('drawer-open');
        parent.querySelector('.drawer').classList.add('display-none');
    }
})