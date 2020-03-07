import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PublicationsPageTemplate = ({
  title,
  publications,
}) => (
  <div className="content">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <section className="section">
            <h2 className="has-text-weight-bold">
              {title}
            </h2>

            <div className="pubs">
              {publications.map(({ authors, title, journal, link }) => (
                <div className="pub" key={link} style={{
                  padding: "1em 0"
                }}>
                  <a href={link} className="pub__title" style={{
                    display: "block",
                    fontSize: "1.2em",
                    fontWeight: "600",
                    lineHeight: "1.3em",
                    paddingBottom: "0.5em",
                  }}>
                    { title }
                  </a>
                  <div className="pub__journal" style={{
                    fontWeight: 600
                  }}>
                    { journal }
                  </div>
                  <div className="pub__authors" style={{
                    fontSize: "0.8em"
                  }}>
                    { authors }
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
)

PublicationsPageTemplate.propTypes = {
  title: PropTypes.string,
  publications: PropTypes.array,
}

const PublicationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter);


  return (
    <Layout>
      <PublicationsPageTemplate
        {...frontmatter}
      />
    </Layout>
  )
}

PublicationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PublicationsPage

export const publicationsPageQuery = graphql`
  query PublicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        publications {
          authors
          title
          journal
          link
        }
      }
    }
  }
`
