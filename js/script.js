/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
          movieList = document.querySelector('.promo__interactive-list'),
          addMovieForm = document.querySelector('.promo__interactive .add input'),
          addForm = document.querySelector('form.add'),
          checkBox = addForm.querySelector('[type="checkbox" i]');
    
    addForm.addEventListener('submit', (e) => {

            e.preventDefault();
            let movie = addMovieForm.value;
            
            // getting boolean value of checkbox state
            const isFavorite = checkBox.checked;
            if(isFavorite) {
                console.log('Adding favorite movie');
            }
            if (movie) {
                if (movie.length >= 21) {
                movie = `${movie.substring(0, 22)}...`;
            }
            movieDB.movies.push(movie);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            e.target.reset();
            } 
         
    });
    
    // delete all adv blocks from right side
    const removeAdv = () => {
        adv.forEach(item => {
            item.remove();
        });
    };
    

    // change movie genre from "comedy" to "drama"
    // change background to the bg.img
    const makeChanges = () => {
        genre.textContent = "драма";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };
    

    // dynamically form movies numbered list due to the movieDB object
    const sortArray = (arr) => {
        arr.sort();
    };
    
    function createMovieList(movies, parent) {
        parent.innerHTML = "";
        movies.forEach((item, i) => {
            parent.innerHTML +=  
            `<li class="promo__interactive-item">${i+1} ${item}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach( (item, i) => {
            item.addEventListener('click', (e) => {
                e.target.parentElement.remove();

                // splice-delete elements from array
                // delete 1 element with index i
                movies.splice(i, 1);
                createMovieList(movies, parent);
            });
        });
        sortArray(movies);
    }
    
    removeAdv();
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});


