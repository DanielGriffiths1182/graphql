const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  info: String
}
`

const resolvers = {
  Query: {
    info: () => `this is our test data`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})
server.start(() => console.log(`server on http://localhost:4000`))
