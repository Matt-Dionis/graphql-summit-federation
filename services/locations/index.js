require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const { buildFederatedSchema } = require('@apollo/federation')
const LocationAPI = require('./datasources/location')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const server = new ApolloServer({
  dataSources: () => {
    return {
      locationAPI: new LocationAPI(),
    }
  },
  schema: buildFederatedSchema([
    {
      resolvers,
      typeDefs,
    },
  ]),
})

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
