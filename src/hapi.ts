import * as hapi from "hapi";
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
    options: {
      apolloOptions: () => ({schema}),
        path: "/graphql",
    },
    register: apolloHapi,
});

server.register({
    options: {
        graphiqlOptions: {
            endpointURL: "/graphql",
        },
        path: "/graphql",
    },
    register: graphiqlHapi,
});

server.start(() => {
  console.log(`Server is listen on ${graphqlPort}`);
  console.log("open browser to http://localhost:3000/graphql");
});
