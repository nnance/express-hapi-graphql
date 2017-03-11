import * as express from "express";
import * as bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import schema from "./schema";

const port = 3000;
const endpointURL = "/graphql";
const app = express();

app.use(bodyParser.json());
app.get("/", graphiqlExpress({endpointURL}));
app.post(endpointURL, graphqlExpress({schema}));

app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});
