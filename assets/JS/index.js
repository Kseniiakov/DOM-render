"use strict";

const mySection = document.querySelector('#users');

function renderUsers(users) {
    for(let i = 0; i < users.length; i++) {
        const article = document.createElement('article');
        article.classList.add('user');
        mySection.append(article);
    
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = users[i].picture.large;
        article.append(img);
    
        const name = document.createElement('h2');
        name.textContent = `${users[i].name.first} ${users[i].name.last}`;
        article.append(name);
    
        const email = document.createElement('p');
        email.classList.add('email');
        email.textContent = users[i].email;
        article.append(email);
    
        const birthday = document.createElement('p');
        birthday.textContent = users[i].dob.date.slice(0, 10);
        birthday.classList.add('birthday');
        article.append(birthday);
    
        const location = document.createElement('div');
        location.classList.add('location');
        article.append(location);
    
        const street = document.createElement('p');
        street.textContent = `${users[i].location.street.number} ${users[i].location.street.name}`;
        location.append(street);
        const city = document.createElement('p');
        city.textContent = users[i].location.city;
        location.append(city);
        const state = document.createElement('p');
        state.textContent = users[i].location.state;
        location.append(state);
    
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        article.append(description);
    }
}

fetch('https://randomuser.me/api/?results=5')
    .then((responce) => responce.json())
    .then((data) => renderUsers(data.results))