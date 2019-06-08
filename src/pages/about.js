import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const { author } = data.site.siteMetadata;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <main>
          <article>
            <header>
              <h1>About</h1>
            </header>
            <div
              style={{
                margin: `${rhythm(1)} auto`,
                width: 150,
                textAlign: `center`,
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                imgStyle={{
                  borderRadius: `100%`,
                }}
              />
              <small>Me, circa 2013</small>
            </div>
            <p>
              Hi. I'm Berk Özbalcı, a software engineer living in Ankara,
              Turkey.
            </p>
            <ul>
              <li>
                I'm a final year CS student in Middle East Technical University.
              </li>
              <li>
                I work part time at <a href={"https://www.udemy.com/"}>Udemy</a>
                , helping over 30 million students and over 42,000 instructors
                have a smooth payments experience on our platform.
              </li>
              <li>
                I sing the bass part in{" "}
                <a href={"https://jazzberrytunes.com/"}>Jazzberry Tunes</a>, an{" "}
                <i>a cappella</i> choir founded in 2014 by METU students.
              </li>
            </ul>
            <p>
              This site is built using{" "}
              <a href={"https://www.gatsbyjs.org/"}>Gatsby</a>. The title of
              this blog, <i>unsystem,</i> was taken from an example given by an
              instructor of mine in a Theoretical Linguistics course. There are
              conceivably two ways to break the word "unsystematic" into its
              morphemes:
            </p>
            <div
              style={{
                margin: `0 auto ${rhythm(1 / 2)}`,
                width: 300,
              }}
            >
              <Image
                fixed={data.parse1.childImageSharp.fixed}
                alt={"unsystem + atic"}
              />
              <Image
                fixed={data.parse2.childImageSharp.fixed}
                alt={"un + systematic"}
              />
            </div>
            <p>
              The idea that there could be "systems" and "unsystems" in our
              world sounded really fun to me. That's how I decided to name my
              blog.
            </p>
          </article>
        </main>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    parse1: file(absolutePath: { regex: "/parse1.png/" }) {
      childImageSharp {
        fixed(height: 122) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    parse2: file(absolutePath: { regex: "/parse2.png/" }) {
      childImageSharp {
        fixed(height: 122) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
