import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { formatDate } from "../utils/helpers";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={""} />
        <Bio />
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
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
`;
