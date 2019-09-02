import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import "./Title.scss";

const Title = props => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = site.siteMetadata;

  return (
    <header>
      <h1 className="site-title">
        <Link to={`/`}>{title}</Link>
      </h1>
    </header>
  );
};

export default Title;
