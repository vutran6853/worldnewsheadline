const axios = require('axios');
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_NEWSAPI_KEY

let getEverthingById = (req, res, next) => {
  console.log('hit')

  axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    console.log(response.data)
  })
}

module.exports = {
  getEverthingById,
}