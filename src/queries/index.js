import { gql } from "apollo-boost";

export const ADD_RECIPE = gql`
  mutation(
    $name: String!
    $description: String!
    $category: String!
    $intructions: String!
    $username: String
  ) {
    addRecipe(
      name: $name
      description: $description
      category: $category
      intructions: $intructions
      username: $username
    ) {
      _id
      name
      description
      category
      intructions
      createdDate
      likes
      username
    }
  }
`;

export const LIKE_RECIPE = gql`
  mutation($_id: ID!, $username: String!) {
    likeRecipe(_id: $_id, username: $username) {
      _id
      likes
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
      favorites {
        _id
        name
      }
    }
  }
`;

export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      category
    }
  }
`;

export const GET_USER_RECIPES = gql`
  query($username: String!) {
    getUserRecipes(username: $username) {
      _id
      name
      likes
    }
  }
`;

export const SEARCH_RECIPES = gql`
  query($searchTerm: String) {
    searchRecipes(searchTerm: $searchTerm) {
      _id
      name
      likes
    }
  }
`;

export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
      _id
      name
      description
      category
      intructions
      createdDate
      likes
      username
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signInUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const DELETE_USER_RECIPE = gql`
  mutation($_id: ID!) {
    deleteUserRecipe(_id: $_id) {
      _id
    }
  }
`;
