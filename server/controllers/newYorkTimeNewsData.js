const axios = require('axios');
axios.defaults.headers.common['api-key'] = process.env.REACT_APP_NEWYORKTIME_KEY

let topstories = (req, res, next) => {

  axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json`)
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

module.exports = {
  topstories,

}