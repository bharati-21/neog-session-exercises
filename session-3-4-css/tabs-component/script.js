const tabItems = document.querySelectorAll('.tab-item');

tabItems.forEach(tabItem => tabItem.addEventListener('click', toggleActiveTab));
function toggleActiveTab(e) {
    const target = e.target;
    const parent = target.parentElement;
    console.log(parent)

    parent.querySelectorAll('.tab-item').forEach(tabItem => {
        if(tabItem !== target && tabItem.classList.contains('active-tab')) {
            tabItem.classList.remove('active-tab');
        }
    });

    target.classList.add('active-tab');
}