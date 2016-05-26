import { ServerRequest, ServerResponse } from 'http'
import * as graphql from 'graphql'

export default function(req : ServerRequest, res : ServerResponse) {
    res.end('hello world from the graphql server')
}
