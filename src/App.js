import React from "react";

import "./App.css";

import Routes from "./routes";

import client from "./services/apollo";
import { ApolloProvider } from "react-apollo-hooks";
import Recipes from "./components/Recipes";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
