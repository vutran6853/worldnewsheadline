require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql');
const { getEverthingById } = require('./controllers/newsData');
const schema = require('./schema/schema');

app.use(cors());
app.use(json());

////  init graphql and Schema  
///  Endpoint Middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

////  News Endpoint
app.get('/api/getEverthingById/:id', getEverthingById)

app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`)
});