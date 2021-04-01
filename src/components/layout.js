import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div style={{ paddingTop: 40}}>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'hsl(1,83%,62%)',
        textAlign: 'center',
        color: '#fff',
        height: 40,
        borderBottom: '1px solid hsl(1,83%,87%)',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}
    >
      <span style={{ fontWeight: '500'}}>
        These docs have{' '}
        <a
          style={{ color: '#fff', textDecoration: 'underline' }}
          href="https://www.notion.so/planningcenter/Doxy-3d883f0e3c1840a9bbc559fe9ba48683"
        >
          moved to Notion
        </a>
      </span>
      !
    </div>

    <div className="container">
      <Helmet
        title="Doxy: A Design System"
        meta={[
          {
            name: 'description',
            content: 'A design system for Church Center, installed and online.'
          },
          { name: 'keywords', content: 'design system, planning center' }
        ]}
      />
      <Header />
      <div className="content">{children}</div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
