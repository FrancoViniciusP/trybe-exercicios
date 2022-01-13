// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const myobject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
  }

  fetch(API_URL, myobject)
    .then(response => response.json())
    .then(data => {
      const h2 = document.getElementById("jokeContainer");
      h2.innerText = (data.joke);
    })
};



window.onload = () => fetchJoke();