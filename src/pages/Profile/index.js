import React from "react";
import WithAuth from "../../services/withAuth";
import UserInfo from "../UserInfo";
import UserRecipes from "../UserInfo/Recipes";

function Profile({ session }) {
  return (
    <div className="App">
      <UserInfo session={session} />
      {/*  <UserRecipes />}*/}
    </div>
  );
}

export default Profile;
