import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
  GET_USER_RECIPES,
  DELETE_USER_RECIPE,
  GET_ALL_RECIPES,
  GET_CURRENT_USER
} from "../../../queries";

export default function UserRecipes({ session }) {
  const { data, error, loading, refetch } = useQuery(GET_USER_RECIPES, {
    variables: {
      username: session.getCurrentUser.username
    }
  });

  const [deleteRecipe] = useMutation(DELETE_USER_RECIPE, {
    refetchQueries: [{ query: GET_ALL_RECIPES }]
  });

  function deleteRecipeUser(recipe) {
    const confirmDelete = window.confirm(
      "Are you sure you want delete Recipe?"
    );

    if (confirmDelete) {
      deleteRecipe({
        variables: {
          _id: recipe._id
        },
        refetchQueries: [{ query: GET_ALL_RECIPES }]
      }).then(() => {
        refetch();
      });
    }
  }

  return (
    <ul>
      <h3>Your Recipes</h3>
      {!loading &&
        data.getUserRecipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>
              <p>{recipe.name}</p>
            </Link>
            <p style={{ marginBotton: "0" }}>Linkes: {recipe.likes}</p>
            <p
              className="delete-button"
              onClick={() => deleteRecipeUser(recipe)}
            >
              X
            </p>
          </li>
        ))}
    </ul>
  );
}
