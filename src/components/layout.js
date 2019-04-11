import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet
      title="Doxy: A Design System"
      meta={[
        { name: 'description', content: 'A design system for Church Center, installed and online.' },
        { name: 'keywords', content: 'design system, planning center' },
      ]}
    />
    <Header />
    <div className="content">
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
