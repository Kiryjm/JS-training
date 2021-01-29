/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movies = document.querySelector('.promo__interactive-list');

// delete all adv blocks from right side
adv.forEach(item => {
    item.remove();
});

// change movie genre from "comedy" to "drama"
genre.textContent = "ДРАМА";

// change background to the bg.img
poster.style.backgroundImage = "url('img/bg.jpg')";

// dynamically form movies numbered list due to the movieDB object

movies.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    movies.innerHTML +=  
    `<li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
    </li>`;
});