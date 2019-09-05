import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { formatDate } from "../utils/helpers";

import "./PostList.scss";

const PostList = props => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `);

  const posts = allMarkdownRemark.edges;

  return (
    <ul className="post-list">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <li key={node.fields.slug}>
            <span className="post-date">
              {formatDate(node.frontmatter.date)}
            </span>
            <Link to={node.fields.slug}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
