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

// "document.querySelectorAll" - обращяемся уо всем селекторам с таким именем на странице.
const percent = document.querySelectorAll('.skills__scale-percent') // 
      bodys = document.querySelectorAll('.skills__scale-body span') // константа всех спенов внутри "skills__scale-body" , которые будут жёлтыми.

//console.log(scales); // можно вывести в лог значение константы (в данном случае это массив со всеми '.skills__scale-percent'). 

// ".forEach" - Для каждого ".skills__scale-percent" (перебираем массив). "item" - уже конкретный элемент массива, для него
// будет функция. "(item, i) bodys[i]" говорим что элемент будет браться по индексу (каждый '.skills__scale-percent' будет соответствовать 
// своему '.skills__scale-body span'). ".style.width" - тоже самое что и "style="width: 50%;"".
//"item.innerHTML;" - Вытаскиваем значение "item"('.skills__scale-percent') из документа.
//Таким образом кладём значение наших "percent" в "bodys". В итоге ширина наших '.skills__scale-body span' будет такоой же, 
//какое значение записано в '.skills__scale-percent'.
    percent.forEach( (item, i) => {
        bodys[i].style.width = item.innerHTML;
    });

    