/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict"; 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you already watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you already watch?', '');
    
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            console.log("Quite a few movies were watched");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            console.log("You are a classical spectator");
        } else if (personalMovieDB.count > 30) {
            console.log("You are movie fan");
        } else {
            console.log("Error occured");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`What is your favourite genre by number ${i}?`);
            while (genre == null || genre == '') {
                genre = prompt(`What is your favourite genre by number ${i}?`);
            }
            personalMovieDB.genres[i-1] = genre;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre #${i + 1} - ${item}`);
        });
    }
};

// personalMovieDB.start();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();