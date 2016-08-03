import * as hapi from "hapi";
import * as graphql from "graphql";
import { ApolloHAPI, GraphiQLHAPI } from "apollo-server";

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "Query",
        fields: {
            testString: {
                type: graphql.GraphQLString,
                resolve: () => "Hello world"
            }
        }
    })
});

// Create a server with a host and port
const server = new hapi.Server();
const graphqlPort = 3000;

server.connection({
    host: "localhost",
    port: graphqlPort,
});

server.register({
    register: new ApolloHAPI(),
    options: {schema},
    routes: { prefix: "/graphql" },
});

server.register({
    register: new GraphiQLHAPI(),
    options: { endpointURL: "/graphql" },
    routes: { prefix: "/graphql" },
});

server.start(() => {
  console.log(`Server is listen on ${graphqlPort}`);
});
