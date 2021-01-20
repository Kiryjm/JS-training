/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

"use strict"; 

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How many movies have you already watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you already watch?', '');

    }
}

start();

function detectPersonalLevel () {
    if (numberOfFilms > 0 && numberOfFilms < 10) {
        console.log("Quite a few movies were watched");
    } else if (numberOfFilms >= 10 && numberOfFilms <=30) {
        console.log("You are a classical spectator");
    } else if (numberOfFilms > 30) {
        console.log("You are movie fan");
    } else {
        console.log("Error occured");
    }
}

detectPersonalLevel();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const lastWatchedMovie = prompt('What is your one of the last watched movie?', ''),
              movieRating = prompt('How can you rate it?', '');
        if (lastWatchedMovie != null && movieRating != null && lastWatchedMovie != '' && 
        lastWatchedMovie != '' && lastWatchedMovie.length <= 50 ) {
            personalMovieDB.movies[lastWatchedMovie] = movieRating;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function showMyDB () {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres () {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`What is your favourite genre by number ${i}?`);
    }
}

writeYourGenres();

// let str = "travelling";
// console.log(parseInt(str));
// console.log(typeof(parseInt(str)));
