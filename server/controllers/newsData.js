const axios = require('axios');
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_NEWSAPI_KEY

let getUSNews = (req, res, next) => {

  axios.get('https://newsapi.org/v2/everything?q=us&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

let getWorldNews = (req, res, next) => {

  axios.get('https://newsapi.org/v2/everything?q=world&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

let getLifeStyleNews = (req, res, next) => {

  axios.get('https://newsapi.org/v2/everything?q=lifestyle&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

let getOpinionNews = (req, res, next) => {

  axios.get('https://newsapi.org/v2/everything?q=opinion&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

let getPoliticsNews = (req, res, next) => {

  axios.get('https://newsapi.org/v2/everything?q=politics&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

let getTVNews = (req, res, next) => {

  axios.get('https://newsapi.org/v2/everything?q=tv&from=2018-11-27&sortBy=publishedAt')
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

let getTopHeadlineByCountry = (req, res, next) => {
  console.log(req.body)
  axios.get(`https://newsapi.org/v2/top-headlines?country=${ req.body.country }&category=${ req.body.category }`)
  .then((response) => {
    console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => {
    console.log(`Danger Backend ${ error }`)
  });
}

module.exports = {
  getUSNews,
  getWorldNews,
  getLifeStyleNews,
  getOpinionNews,
  getPoliticsNews,
  getTVNews,
  getTopHeadlineByCountry,

}