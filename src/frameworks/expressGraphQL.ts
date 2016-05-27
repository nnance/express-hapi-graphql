import * as express from 'express'
import GraphqlServer from '../core/graphqlServer'


export default function(server: GraphqlServer) {
    return (req : express.Request, res : express.Response, next) => {
        const gqlResponse = server.fulfillQuery(req.body)

        res.set('Content-Type', 'application/json');
        if (gqlResponse.errors) {
            res.send(gqlResponse.errorCode, { errors: gqlResponse.errors })
        } else {
            res.send({ data: gqlResponse.data })
        }
    }
}
