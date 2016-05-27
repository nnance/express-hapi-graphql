import * as graphql from 'graphql'
// can't use imports here because the validator is not defined in the current Typscript Definition
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

    fulfillQuery(source: string) : gqlResponse {
        let documentAST;

        // parse request, reporting errors
        try {
            documentAST = graphql.parse(source);
        } catch (syntaxError) {
            // Return 400: Bad Request if any syntax errors errors exist.
            return { errorCode: 400, errors: [syntaxError] };
        }

        // Validate AST, reporting any errors.
        const validationErrors = GraphQLValidator.validate(this.schema, documentAST);
        if ( validationErrors.length ) {
            return { errorCode: 500, errors: validationErrors }
        }

        return {
            data: {
                testString: 'Hello world'
            }
        }
    }
}
