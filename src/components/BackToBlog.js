import React from "react";
import { Link } from "gatsby";

const BackToBlog = () => {
  return (
    <nav>
      <Link to="/">
        <span role="img" aria-label="back">
          ⬅️
        </span>{" "}
        Back to blog
      </Link>
    </nav>
  );
};

export default BackToBlog;
