import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { ADD_RECIPE } from "../../../queries";

import Error from "../../../components/Error";

const INITIAL_STATE = {
  name: "",
  category: "",
  description: "",
  intructions: "",
  username: ""
};

export default function AddRecipe({ session }) {
  const [recipe, setNewRecipe] = useState({
    ...INITIAL_STATE,
    username: session.getCurrentUser.username
  });

  const [addRecipe, { error, loading, data }] = useMutation(ADD_RECIPE);

  function validateForm() {
    const { name, category, description, intructions } = recipe;
    const isInvalid = !name || !category || !description || !intructions;
    return isInvalid;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewRecipe({ ...recipe, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    addRecipe({
      variables: {
        ...recipe
      }
    });
    console.log("rec", session.getCurrentUser.username);

    console.log("recipe", recipe);
  }

  return (
    <div className="app">
      <h2 className="app">Add Recipe</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Recipe name"
          onChange={handleChange}
          value={recipe.name}
        />
        <select name="category" onChange={handleChange} value={recipe.category}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleChange}
          value={recipe.description}
        />
        <textarea
          name="intructions"
          placeholder="Add instruction"
          onChange={handleChange}
          value={recipe.intructions}
        />
        <button
          disabled={loading || validateForm()}
          type="submit"
          className="button-primary"
        >
          Submit
        </button>
        {error && <Error error={error} />}
      </form>
    </div>
  );
}
