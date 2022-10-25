import React, { useState } from "react";

const AddToFavorite = ({ callback }) => {
  const [value, setValue] = useState(5);
  return (
    <div>
      <p>
        <button
          onClick={() => {
            callback(value);
          }}
        >
          Add to favorite
        </button>
      </p>
    </div>
  );
};

export default AddToFavorite;
