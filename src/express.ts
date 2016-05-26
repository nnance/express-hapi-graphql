const express = require('express')
import graphqlServer from './graphqlServer'

const app = express()

app.get('/', graphqlServer)

app.listen(3000)
