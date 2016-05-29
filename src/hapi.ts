import * as hapi from 'hapi'
import GraphqlServer from './core/graphqlServer'
import schema from './data/schema'
import HapiGQL from './frameworks/hapiGraphQL'

const gqlServer = new GraphqlServer(schema)

// Create a server with a host and port
const server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register({
    register: new HapiGQL(),
    options: { server: gqlServer },
    routes: { prefix: '/graphql' }
})

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
