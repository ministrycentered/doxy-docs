import React from 'react'
import Link from 'gatsby-link'

import doxy from '../../images/doxy@3x.png'
import PageList from '../PageList'

const Header = () => (
  <header>
    <h1>
      <Link to="/">
        <img src={doxy} alt="Doxy" />
      </Link>
    </h1>
    <PageList />
  </header>
)

export default Header
