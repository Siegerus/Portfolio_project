//Задаём константу "hamburger". Ищем в нашем документе ("document.querySelector") селектор ".hamburger".
// Аналогично с константой "menu" и "сlose".

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

//Дальше говорим, что с помощью ".addEventListener" будем отслеживать все клики по "hamburger".И при клике будет 
//выполняться функция - к константе "menu" будет добавляться класс "active" (впереди точку не ставим, т.к ".classList.add" подразумевает работу с классами).
hamburger.addEventListener ('click', () => {
    menu.classList.add('active');
});      
// По аналогии. Отслеживаем все клики по "close" и при клике убираем класс активности у меню.
close.addEventListener ('click', () => {
    menu.classList.remove('active');
}) 

