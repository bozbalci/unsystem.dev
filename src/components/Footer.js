import React from 'react';
import { StaticQuery, graphql } from "gatsby";

class Footer extends React.Component {
  render() {
    return (
      <StaticQuery
        query={footerQuery}
        render={data => {
          const { social } = data.site.siteMetadata;

          return (
            <footer>
              <div style={{ float: 'right' }}>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                  rss
                </a>
              </div>
              <a
                href={`mailto:${social.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                email
              </a>{' '}
              &bull;{' '}
              <a
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>{' '}
              &bull;{' '}
              <a
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </footer>
          );
        }}
      />
    );
  }
}

const footerQuery = graphql`
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
  `;

export default Footer;
