import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const { avatar, site } = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = site.siteMetadata;

  const image = (
    <Image
      fixed={avatar.childImageSharp.fixed}
      alt={author}
      style={{
        marginRight: rhythm(1 / 2),
        minWidth: 50,
        borderRadius: `100%`,
      }}
    />
  );

  const bioText = (
    <p>
      Personal blog of <Link to="/about">{author}</Link>. <br />I write about
      programming, music and things I do.
    </p>
  );

  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      {image}
      {bioText}
    </div>
  );
};

export default Bio;
