import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const CvPageTemplate = ({
  title,
  sections,
}) => (
  <div className="content">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <section className="section">
            <h2 className="has-text-weight-bold">
              { title }
            </h2>

            {sections.map(({ name, items }) => (
              <div>
                <br />
                <br />
                <h3>
                  { name }
                </h3>
                <div>
                  {items.map(({ what, description, where, when }) => (
                    <div className="pub" key={what} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1em 0",
                    }}>
                      <div style={{
                        flex: 1,
                      }}>
                        <div style={{
                          fontWeight: 600
                        }}>
                          { what }
                        </div>
                        <div style={{
                          fontSize: "0.8em"
                        }}>
                          { description }
                        </div>
                        <div style={{
                          fontSize: "0.8em"
                        }}>
                          { where }
                        </div>
                      </div>
                      <div style={{
                        fontSize: "0.8em",
                        textAlign: "right",
                      }}>
                        { when }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  </div>
)

CvPageTemplate.propTypes = {
  title: PropTypes.string,
  education: PropTypes.shape({
    what: PropTypes.object,
    where: PropTypes.string,
    when: PropTypes.string,
  }),
  research: PropTypes.shape({
    what: PropTypes.object,
    description: PropTypes.object,
    where: PropTypes.string,
    when: PropTypes.string,
  }),
  awards: PropTypes.shape({
    what: PropTypes.object,
    description: PropTypes.object,
    when: PropTypes.string,
  }),
  presentations: PropTypes.shape({
    what: PropTypes.object,
    where: PropTypes.string,
    when: PropTypes.string,
  }),
}

const CvPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const sections = [
    {name: "Education", items: frontmatter.education},
    {name: "Research", items: frontmatter.research},
    {name: "Awards", items: frontmatter.awards},
    {name: "Presentations", items: frontmatter.presentations},
  ]

  return (
    <Layout>
      <CvPageTemplate
        {...frontmatter}
        sections={sections}
      />
    </Layout>
  )
}

CvPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CvPage

export const cvPageQuery = graphql`
  query CvPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        education {
          what,
          where,
          when
        },
        research {
          what,
          description,
          where,
          when
        },
        awards {
          what,
          description,
          when
        },
        presentations {
          what,
          where,
          when
        }
      }
    }
  }
`
