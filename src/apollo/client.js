import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
    uri:"http://localhost:8000/___graphql",
    fetch
})