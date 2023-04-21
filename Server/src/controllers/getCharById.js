const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        const { name, gender, species, origin, image, status } = response.data;
        const character = {
          id,
          name,
          gender,
          species,
          origin: origin.name || 'unknown', // Usamos la notación de punto y agregamos un valor predeterminado para el caso en que el nombre no exista
          image,
          status
        };
        res.send(character);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(404);
      });
  };
  
  

module.exports = {
    getCharById
}