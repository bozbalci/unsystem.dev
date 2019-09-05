import React from "react";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostList from "../components/PostList";

const BlogIndex = ({ location }) => (
  <Layout location={location}>
    <SEO title={""} />
    <Bio />
    <PostList />
  </Layout>
);

export default BlogIndex;
