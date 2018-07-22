import { graphiqlHapi, graphqlHapi } from 'apollo-server-hapi'
import { Server } from 'hapi'
import schema from './schema'

async function startServer() {
    // Create a server with a host and port
    const options = {
        host: 'localhost',
        port: 3000,
    }

    const server = new Server(options)

    await server.register({
        options: {
            graphqlOptions: { schema },
            path: '/graphql',
        },
        plugin: graphqlHapi,
    })

    await server.register({
        options: {
            graphiqlOptions: {
                endpointURL: '/graphql',
            },
            path: '/',
        },
        plugin: graphiqlHapi,
    })

    try {
        await server.start()
        console.log(`Server is listen on ${options.port}`)
        console.log(`open browser to http://localhost:${options.port}`)
    } catch (e) {
        console.error(e)
    }
}

startServer().catch((e) => console.error(e))
