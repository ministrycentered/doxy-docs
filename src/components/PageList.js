import React from 'react'
import Link from 'gatsby-link'

const PageList = () => (
  <div className="page-list">
    <h3>
      <Link to="/">Style</Link>
    </h3>
    <ul>
      <li>
        <Link to="/#logo">Logo</Link>
      </li>
      <li>
        <Link to="/#color">Color</Link>
      </li>
      <li>
        <Link to="/#typography">Typography</Link>
      </li>
      <li>
        <Link to="/#layout">Layout & Spacing</Link>
      </li>
      <li>
        <Link to="/#illustration">Illustration</Link>
      </li>
    </ul>
    <h3>
      <Link to="/components/">Components</Link>
    </h3>
    <ul>
      <li>
        <Link to="/components/#action-drawer">Action Drawer</Link>
      </li>
      <li>
        <Link to="/components/#avatar">Avatar</Link>
      </li>
      <li>
        <Link to="/components/#badge">Badge</Link>
      </li>
      <li>
        <Link to="/components/#button">Button</Link>
      </li>
      <li>
        <Link to="/components/#card">Card</Link>
      </li>
      <li>
        <Link to="/components/#expanding-text">ExpandingText</Link>
      </li>
      <li>
        <Link to="/components/#forms">Forms</Link>
      </li>
      <li>
        <Link to="/components/#highlight">Highlight</Link>
      </li>
      <li>
        <Link to="/components/#icon">Icon</Link>
      </li>
      <li>
        <Link to="/components/#image">Image</Link>
      </li>
      <li>
        <Link to="/components/#row">Row</Link>
      </li>
      <li>
        <Link to="/components/#shelf">Shelf</Link>
      </li>
      <li>
        <Link to="/components/#site-header">Site Header</Link>
      </li>
      <li>
        <Link to="/components/#typography">Typography</Link>
      </li>
    </ul>
  </div>
)

export default PageList
