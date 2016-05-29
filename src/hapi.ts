const Hapi = require('hapi');
import HapiGQL from './frameworks/hapiGraphQL'

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register({
    register: new HapiGQL(),
    routes: { prefix: '/graphql' }
})

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
