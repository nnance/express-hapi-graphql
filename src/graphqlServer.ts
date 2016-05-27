import * as graphql from 'graphql'
const GraphQLValidator = require('graphql/validation')

export interface gqlResponse {
    errorCode?: number,
    errors?: Array<string>,
    data?: Object
}

export default class {

    private schema: graphql.GraphQLSchema


    constructor(schema?: graphql.GraphQLSchema) {
        this.schema = schema
    }

    processRequst(source: string) : gqlResponse {
        let documentAST;
        try {
            documentAST = graphql.parse(source);
        } catch (syntaxError) {
            // Return 400: Bad Request if any syntax errors errors exist.
            return { errorCode: 400, errors: [syntaxError] };
        }
        // Validate AST, reporting any errors.
        const validationErrors = GraphQLValidator.validate(this.schema, documentAST);

        return JSON.stringify({
            firstName: 'Super',
            lastName: 'Man'
        })
    }
}
