import React from "react";
import { Link } from "gatsby";

export default function BackToBlog() {
  return (
    <Link to="/">
      <span role="img" aria-label="back">⬅️</span>
      Back to blog
    </Link>
  );
}



