import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import "./Bio.scss";

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

  const image = <Image fixed={avatar.childImageSharp.fixed} alt={author} />;

  const bioText = (
    <p>
      Personal blog of <Link to="/about">{author}</Link>. <br />I write about
      programming, music and things I do.
    </p>
  );

  return (
    <aside className="bio">
      {image}
      {bioText}
    </aside>
  );
};

export default Bio;
