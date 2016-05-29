import * as hapi from 'hapi'
import GraphqlServer from '../core/graphqlServer'


export interface IRegister {
    (server: hapi.Server, options:any, next:any): void
    attributes?: any
}

export interface IOptions {
    server: GraphqlServer
}

export default class Plugin {
    constructor() {
        this.register.attributes = {
            name: 'graphql',
            version: '0.0.1'
        }
    }

    register:IRegister = (server : hapi.Server, options: IOptions, next) => {
        server.route({
            method: 'GET',
            path: '/test',
            handler: (request, reply) => {
                reply('test passed')
            }
        })

        server.route({
            method: 'POST',
            path: '/',
            handler: (request, reply) => {
                const gqlResponse = options.server.fulfillQuery(request.payload)
                if (gqlResponse.errors) {
                    reply({ errors: gqlResponse.errors }).code(gqlResponse.errorCode)
                } else {
                    reply({ data: gqlResponse.data })
                }
            }
        })
        next()
    }
}
