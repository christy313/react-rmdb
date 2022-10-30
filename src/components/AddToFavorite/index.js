import React, { useState } from "react";
import { Button } from "./AddToFavorite.styles";

const AddToFavorite = ({ callback }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <Button onClick={callback}>
      {favorited ? "Remove favorite" : "Add to favorite"}
    </Button>
  );
};

export default AddToFavorite;
