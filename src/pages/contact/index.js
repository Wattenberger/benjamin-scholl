import React from 'react'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Contact
                </h2>

                <p>
                  Send me an email at <a href="mailto: scholl.ben@gmail.com">scholl.ben@gmail.com</a>
                </p>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    )
  }
}
