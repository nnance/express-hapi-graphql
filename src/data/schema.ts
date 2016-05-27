import * as graphql from 'graphql'

export default new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            testString: { type: graphql.GraphQLString }
        }
    })
})
