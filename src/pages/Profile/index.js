import React from "react";

import UserInfo from "../UserInfo";

export default function Profile({ session }) {
  return (
    <div className="App">
      <UserInfo session={session} />
    </div>
  );
}
