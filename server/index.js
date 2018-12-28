require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const { getUSNews, getWorldNews, getLifeStyleNews, 
        getOpinionNews, getPoliticsNews, getTVNews,
        getTopHeadlineByCountry,
      } = require('./controllers/newsData');


app.use(cors());
app.use(json());

////  init graphql and Schema  
///  Endpoint Middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

////  News Endpoint
app.get('/api/getUSNews', getUSNews)
app.get('/api/getWorldNews', getWorldNews)
app.get('/api/getLifeStyleNews', getLifeStyleNews)
app.get('/api/getOpinionNews', getOpinionNews)
app.get('/api/getPoliticsNews', getPoliticsNews)
app.get('/api/getTVNews', getTVNews)
app.post('/api/getTopHeadlineByCountry', getTopHeadlineByCountry)

app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`)
});