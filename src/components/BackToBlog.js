import React from "react";
import { Link } from "gatsby";

const BackToBlog = () => {
  return (
    <Link to="/">
      <span role="img" aria-label="back">
        ⬅️
      </span>{" "}
      Back to blog
    </Link>
  );
};

export default BackToBlog;
