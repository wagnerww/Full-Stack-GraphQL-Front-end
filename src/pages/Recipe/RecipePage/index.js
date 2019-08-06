import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import { useQuery } from "react-apollo-hooks";
import { GET_RECIPE } from "../../../queries";

function RecipePage({ match }) {
  const { _id } = match.params;
  const { data, error, loading } = useQuery(GET_RECIPE, {
    variables: {
      _id
    }
  });

  return (
    <div className="app">
      {!loading && (
        <Fragment>
          <h2>{data.getRecipe.name}</h2>
          <p>Category: {data.getRecipe.category}</p>
          <p>Description: {data.getRecipe.description}</p>
          <p>Instruction: {data.getRecipe.intructions}</p>
          <p>Likes: {data.getRecipe.likes}</p>
          <p>Created by: {data.getRecipe.username}</p>
          <button>Like</button>
        </Fragment>
      )}{" "}
    </div>
  );
}

export default withRouter(RecipePage);
