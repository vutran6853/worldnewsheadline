const grahpql = require('graphql');

const axios = require('axios');
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_NEWSAPI_KEY

const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLInt} = grahpql;

//// def ObjectType 
const newsEverything = new GraphQLObjectType({
  name: 'newsEverythings',
  fields: () => ({ 
    articles: {  type: GraphQLInt  },
  })
});

////  init start point (root)
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    newsEverythings: {
      type:  newsEverything,
      args: { id: { type: GraphQLString } },
      //// code to get data from db or other source 
      resolve(parent, args) {
        // console.log(`args ${ args.id }`);
        return  axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-27&sortBy=publishedAt&apiKey=83cee2b8991d476ba1f2e0f98a135341`)
                .then(response => response.data)
      },    
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
});