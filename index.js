const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const InitiateMongoServer = require("./configs/db");

// Initiate Mongo Server
InitiateMongoServer();

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const PORT = 4000;

(async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Hello from Apollo Sever");
  })

  app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
})();