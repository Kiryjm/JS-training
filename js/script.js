'use strict';

// Fetch API

    // fetch function returns promises
    // json(), text() method return promise too
    // fetch get 2 arguments: string Url and request settings object 
    // with corresponding properties names and values

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Alex'}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));