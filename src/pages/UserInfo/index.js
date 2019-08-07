import React from "react";
import { Link } from "react-router-dom";

export default function UserInfo({ session }) {
  function formatDate(date) {
    const newDate = new Date(date).toLocaleDateString("en-US");
    const newTime = new Date(date).toLocaleDateString("en-US");
    return `${newDate} at ${newTime}`;
  }

  return (
    <div>
      <h3>User info</h3>
      <p>Username: {session.getCurrentUser.username}</p>
      <p>Email: {session.getCurrentUser.email}</p>
      <p>Join Date:{formatDate(session.getCurrentUser.joinDate)}</p>
      <ul>
        <h3>{session.getCurrentUser.username}`s Favoreites</h3>
        {session.getCurrentUser.favorites.map(favorite => (
          <li key={favorite._id}>
            <Link to={`/recipes/${favorite._id}`}>
              <p>favorite.name</p>
            </Link>
          </li>
        ))}

        {!session.getCurrentUser.favorites.length && (
          <p>
            <strong>You have no favorites currently. Go add some!</strong>
          </p>
        )}
      </ul>
    </div>
  );
}
