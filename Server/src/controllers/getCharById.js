const axios = require('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`);
    .then(response => response.data)
    .then(data => {}
}

module.exports = {
    getCharById
}