// import sirv from 'sirv';
const polka = require('polka'); 


const { ApolloServer, gql } = require('apollo-server-express');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = polka() // You can also use Express

 // The GraphQL schema
 const typeDefs = gql`
 type Query {
   "A simple type for getting started!"
   hello: String
 }
`;

// A map of functions which return data for the schema.
const resolvers = {
 Query: {
   hello: () => 'world'
 }
};

const graphQLServer = new ApolloServer({
   // These will be defined for both new or existing servers
   typeDefs,
   resolvers,
 });
 graphQLServer.applyMiddleware({app: server, path:'/graphql'}); // app is from an existing express app

 /*
server.get('/hello', (req,res) => {
	res.end('Hellow World!')
})
	server.use(
		compression({ threshold: 0 }),
		sirv('assets', { dev }),
		sapper({ manifest })
	)
	.listen(PORT)
	.catch(err => {
		console.log('error', err);
	})
    */
   server.listen(8084,()=>{
       console.log(`Server is running on port ${PORT || 8084}`);
   });