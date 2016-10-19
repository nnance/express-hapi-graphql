import * as hapi from "hapi";
import * as graphql from "graphql";
import { apolloHapi, graphiqlHapi } from "apollo-server";
import schema from "./schema";

// Create a server with a host and port
const server = new hapi.Server();
const graphqlPort = 3000;

server.connection({
    host: "localhost",
    port: graphqlPort,
});

server.register({
    register: apolloHapi,
    options: {
        path: "/graphql",
        apolloOptions: () => ({schema}),
    }
});

server.register({
    register: graphiqlHapi,
    options: {
        path: "/graphql",
        graphiqlOptions: {
            endpointURL: "/graphql"
        },
    },
});

server.start(() => {
  console.log(`Server is listen on ${graphqlPort}`);
  console.log("open browser to http://localhost:3000/graphql");
});
