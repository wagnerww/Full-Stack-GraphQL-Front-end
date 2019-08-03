import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Recipes from "./components/Recipes";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4444/graphql"
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Home</h1>
        <Recipes />
      </div>
    </ApolloProvider>
  );
}

export default App;
