import * as express from "express";
import * as bodyParser from "body-parser";
import { graphqlHTTP } from "apollo-server";
import schema from "./data/schema";

const port = 3000;
const app = express();

app.use(bodyParser.text());
app.use("/", graphqlHTTP({schema}));

app.listen(port, () => {
    console.log(`Server is listen on ${port}`);
});
