const burger = document.querySelector('#burger');
const pages = document.querySelector('#pages');

burger.addEventListener('click', () => {
    pages.classList.toggle('show-pages');
});
