import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_RECIPES } from "../../../queries";

export default function UserRecipes() {
  const { data, error, loading } = useQuery(GET_ALL_RECIPES);

  return (
    <ul>
      <h3>Your Recipes</h3>
      {data.getUserRecipes.map(recipe => (
        <li key={recipe._id}>
          <Link to={`/recipes/${recipe._id}`}>
            <p>{recipe.name}</p>
          </Link>
          <p>Linkes: {recipe.likes}</p>
        </li>
      ))}
    </ul>
  );
}
