import React from 'react'
import PropTypes from 'prop-types'
import { ResearchPageTemplate } from '../../templates/research-page'

const ResearchPagePreview = ({ entry, widgetFor }) => (
  <ResearchPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ResearchPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResearchPagePreview
