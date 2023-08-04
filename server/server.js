//importing dependencies
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const authMiddleware = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { type } = require('os');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();
// server = new server instance that will be passed into ApolloServer
//typeDefs = imported typeDefs from schemas/index.js
//resolvers = imported resolvers from schemas/index.js
//context = context function that will be passed into ApolloServer
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets and import path to join dirname with build folder
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get will get everything in the build folder and serve it
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
}
);

// function that will start the server
const startServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
    console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
};

//calling the function that started the server
startServer(typeDefs, resolvers);
