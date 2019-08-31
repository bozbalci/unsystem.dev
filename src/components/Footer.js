import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./Footer.scss";

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            github
            twitter
            email
          }
        }
      }
    }
  `);

  const { social } = site.siteMetadata;

  return (
    <footer className="footer">
      <hr />
      <a
        href={`mailto:${social.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>{" "}
      &bull;{" "}
      <a
        href={`https://twitter.com/${social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>{" "}
      &bull;{" "}
      <a
        href={`https://github.com/${social.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
        rss
      </a>
    </footer>
  );
};

export default Footer;
