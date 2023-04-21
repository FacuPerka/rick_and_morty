const axios = require('axios');

const getCharById = async (req, res) => {
  try {
    const response = await axios(`https://rickandmortyapi.com/api/character/${req.params.id}`);
    const { name, gender, species, origin, image, status } = response.data;
    const character = {
      id: req.params.id,
      name,
      gender,
      species,
      origin: origin.name || 'unknown',
      image,
      status
    };
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getCharById };