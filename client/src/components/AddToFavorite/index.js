import React, { useState } from "react";

const AddToFavorite = () => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div>
      <p>
        <button>{favorited ? "Remove favorite" : "Add to favorite"}</button>
      </p>
    </div>
  );
};

export default AddToFavorite;
