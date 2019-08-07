import React, { useState, useEffect } from "react";
import { useMutation } from "react-apollo-hooks";

import WithSession from "../../services/withSession";
import { LIKE_RECIPE } from "../../queries";

function LikeRecipe({ session, _id }) {
  const [like, setLike] = useState({
    username: "wagnerww",
    liked: false
  });

  useEffect(() => {
    if (session.getCurrentUser) {
      const { username, favorites } = session.getCurrentUser;
      const prevLiked =
        favorites.findIndex(favorite => favorite._id === _id) > -1;
      console.log("fav", favorites);
      setLike({ username, liked: prevLiked });
    }
  }, [_id, session.getCurrentUser]);

  const [likeMutation] = useMutation(LIKE_RECIPE);

  function handleLike() {
    const { username, liked } = like;
    const newLiked = !liked;
    setLike({ ...like, liked: newLiked });
    if (newLiked) {
      console.log("like");
      likeMutation({
        variables: { _id, username }
      }).then(async data => {
        console.log("foi", data);
        //await refetch();
      });
    } else {
      console.log("unlike");
    }
  }

  return (
    like.username && (
      <button onClick={handleLike}>{like.liked ? "Liked" : "Like"}</button>
    )
  );
}

export default WithSession(LikeRecipe);
