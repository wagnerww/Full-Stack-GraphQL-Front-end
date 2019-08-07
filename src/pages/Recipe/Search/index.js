import React, { useState, useEffect } from "react";

import { useQuery, useApolloClient } from "react-apollo-hooks";
import { SEARCH_RECIPES } from "../../../queries";

import SearchItem from "../../../components/SeacrhItem";

export default function Search() {
  const [search, setSearch] = useState({ searchResults: [] });
  const { data, error, loading } = useQuery(SEARCH_RECIPES, {
    variables: {
      searchTerm: ""
    }
  });

  //Monitora a variável data
  useEffect(() => {
    if (data) {
      const { searchRecipes } = data;
      setSearch({ searchResults: searchRecipes });
    }
  }, [data]);

  const client = useApolloClient();

  async function hancleChange(e) {
    e.persist();
    const { data } = await client.query({
      query: SEARCH_RECIPES,
      variables: { searchTerm: e.target.value }
    });
    setSearch({ searchResults: data.searchRecipes });
  }

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search for recipes"
        onChange={hancleChange}
      />
      <ul>
        {console.log("teste", search.searchResults.length)}
        {search.searchResults.length >= 1 &&
          search.searchResults.map(recipe => (
            <SearchItem key={recipe._id} {...recipe} />
          ))}
      </ul>
    </div>
  );
}
