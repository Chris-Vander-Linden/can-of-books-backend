const noFoundResponse = (request, response) => {
  response.status(404).send('This page can not be found');
};

module.exports = noFoundResponse;
