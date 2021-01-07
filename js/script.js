
"use strict"; 

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя 
на вопрос: 'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

//1)
const numberOfFilms = +prompt("How many movies have you already watch?", "");

//2)
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3)
const lastWatchedMovie1 = prompt("What is your one of the last watched movie?"),
       movieRating1 = +prompt("How can you rate it?", ""),
       lastWatchedMovie2 = prompt("What is your one of the last watched movie?"),
       movieRating2 = +prompt("How can you rate it?", "");

personalMovieDB.movies[lastWatchedMovie1] = movieRating1;
personalMovieDB.movies[lastWatchedMovie2] = movieRating2;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);
