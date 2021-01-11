
"use strict"; 

// //Conditions

// if('/0') {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Ok!');
// }

// //Ternary operator
// (num == 50) ? console.log('Ok!') : console.log('Error');

// // use switch for many case branches
// // switch implements strict comparison!!!
// // const num = '50';

// switch (num) {
//     case '49': 
//         console.log('False');
//         break;
//     case '100':
//         console.log('False');
//         break;
//     case '50': 
//         console.log('True');
//         break;
//     default:
//         console.log('default');
//         break;
// }

// //Loops

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         // break;
//         continue;

//     }
//     console.log(i);
// }

/*
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами
*/

const numberOfFilms = +prompt('How many movies have you already watch?', '');

if (numberOfFilms > 0 && numberOfFilms < 10) {
    alert("Quite a few movies were watched");
} else if (numberOfFilms >= 10 && numberOfFilms <=30) {
    alert("You are a classical spectator");
} else if (numberOfFilms > 30) {
    alert("You are movie fan");
} else {
    alert("Error occured");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const lastWatchedMovie1 = prompt("What is your one of the last watched movie?"),
//        movieRating1 = +prompt("How can you rate it?", ""),
//        lastWatchedMovie2 = prompt("What is your one of the last watched movie?"),
//        movieRating2 = +prompt("How can you rate it?", "");

for (let i = 0; i < 2; i++) {
    const lastWatchedMovie = prompt('What is your one of the last watched movie?', ''),
          movieRating = prompt('How can you rate it?', '');
    if (lastWatchedMovie != null && movieRating != null && lastWatchedMovie != '' && 
    lastWatchedMovie != '' && lastWatchedMovie.length <= 50 ) {
        personalMovieDB.movies[lastWatchedMovie] = movieRating;
    } else {
        console.log('Error');
        i--;
    }
}

console.log(personalMovieDB);
console.log(personalMovieDB.movies);