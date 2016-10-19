import * as graphql from "graphql";
import * as express from "express";
import * as bodyParser from "body-parser";
import { apolloExpress, graphiqlExpress } from "apollo-server";

const port = 3000;
const endpointURL = "/graphql";
const app = express();

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        fields: {
            testString: {
                resolve: () => "Hello world",
                type: graphql.GraphQLString,
            },
        },
        name: "Query",
    }),
});

app.use(bodyParser.json());
app.get("/", graphiqlExpress({endpointURL}));
app.post(endpointURL, apolloExpress({schema}));

app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});
