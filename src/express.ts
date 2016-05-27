const express = require('express')
import GraphqlServer from './graphqlServer'

const app = express()
const graphql = new GraphqlServer()

function handler(req, res, next) {
    const gqlResponse = graphql.processRequst(req.body)

    if (gqlResponse.errors) {
        res.sendStatus(gqlResponse.errorCode)
    } else {
        res.set('Content-Type', 'application/json');
        res.send(gqlResponse.data)
    }
    next()
}

app.use('/', handler)

app.listen(3000)
