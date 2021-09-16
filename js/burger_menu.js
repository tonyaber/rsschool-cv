const burger = document.querySelector('.header_burger'),
    menuList = document.querySelector('.header_list'),
    links = menuList.querySelectorAll('a'),
    body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('lock');
})

links.forEach(element => {
    element.addEventListener('click', () => {
        burger.classList.remove('active');
        menuList.classList.remove('active');
        body.classList.remove('lock');
    })
});

