export interface IRegister {
    (server:any, options:any, next:any): void
    attributes?: any
}

export default class Plugin {
    constructor() {
        this.register.attributes = {
            name: 'graphql',
            version: '0.0.1'
        }
    }

    register:IRegister = (server, options, next) => {
        server.route({
            method: 'GET',
            path: '/test',
            handler: function (request, reply) {
                reply('Hello from the GraphqlServer')
            }
        })
        next()
    }
}
