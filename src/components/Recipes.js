import React from "react";
import "../App.css";

import { Query } from "react-apollo";
import { GET_ALL_RECIPES } from "../queries";

export default function Recipes() {
  return (
    <div>
      <h2>Recipes</h2>
      <Query query={GET_ALL_RECIPES}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>{error.message}</div>;
          console.log(data);
          if (data)
            return (
              <div>
                <ul>
                  {data.getAllRecipes.map(recipes => (
                    <li key={recipes.name}>{recipes.name}</li>
                  ))}
                </ul>
              </div>
            );
        }}
      </Query>
    </div>
  );
}
