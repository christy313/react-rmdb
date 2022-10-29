import React, { useState } from "react";

const AddToFavorite = ({ callback }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <button onClick={callback}>
      {favorited ? "Remove favorite" : "Add to favorite"}
    </button>
  );
};

export default AddToFavorite;
