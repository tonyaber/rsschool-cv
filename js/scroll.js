const animationTime = 4,
    scrollBy = 5;

document.querySelectorAll('.header_list a[href*="#"').forEach(anchor => {
    anchor.addEventListener('click', (evt) => {
        evt.preventDefault();

        const anchorY = document.querySelector(anchor.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        const scroll = setInterval(() => {
            if (scrollBy >= window.pageYOffset - anchorY + 10 && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            }
            else if (scrollBy <= window.pageYOffset - anchorY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, -scrollBy);
            }          
            else {
                clearInterval(scroll);
            }
        }, animationTime);
    })
});

console.log('Task score: 150');