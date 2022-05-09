const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers.js");
const mongoose = require("mongoose");

mongoose.connect("mongdb://localhost:27017/graphqlnode",{
  useNewUrlParser: true
})

const server= GraphQLServer( {
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();