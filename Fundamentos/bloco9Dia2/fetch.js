const fetch = require('node-fetch');

/* const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.value));
}

fetchJoke(); */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Exemplo com .catch para receber um erro

/* const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
  }
  
  fetchJoke(); */

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Exemplo com async e await com try e catch

  const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
      const response = await fetch(url)
      const data = await response.json();
      console.log(data.value);
    } catch (error) {
      console.log(`Algo deu errado :( \n${error}`);
    }
  }
  
  fetchJoke();



/*   const starWarsQuote = () => {
	const url = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';
	  fetch(url)
	    .then(response => response.json())
	    .then(data => console.log(data.starWarsQuote))
            .catch(error => console.log(error))
};

starWarsQuote() */
