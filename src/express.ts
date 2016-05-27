import * as express from 'express'
import * as bodyParser from 'body-parser'
import GraphqlServer from './core/graphqlServer'
import expressGQL from './frameworks/expressGraphQL'
import schema from './data/schema'

const port = 3000
const app = express()
const gqlServer = new GraphqlServer(schema)

app.use(bodyParser.text())
app.use('/', expressGQL(gqlServer))

app.listen(port, () => {
    console.log(`Server is listen on ${port}`)
})
