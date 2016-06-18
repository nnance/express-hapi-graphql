import * as hapi from "hapi";
import schema from "./data/schema";
import { HapiApollo } from "apollo-server";

// Create a server with a host and port
const server = new hapi.Server();
server.connection({
    host: "localhost",
    port: 8000
});

server.register({
    register: new HapiApollo(),
    options: { schema: schema },
    routes: { prefix: "/graphql" }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("Server running at:", server.info.uri);
});
