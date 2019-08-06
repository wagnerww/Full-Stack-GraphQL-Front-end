import React from "react";

import { useQuery } from "react-apollo-hooks";
import { GET_ALL_RECIPES } from "../../queries";
import RecipeItem from "../../components/RecipeItem";

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_RECIPES);
  console.log(data);
  return (
    <div>
      <h2>Recipes</h2>
      {data && (
        <div>
          <ul>
            {data.getAllRecipes.map(recipe => (
              <RecipeItem key={recipe._id} {...recipe} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
