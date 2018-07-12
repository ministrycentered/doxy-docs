import React from 'react'
import Link from 'gatsby-link'

import sectionHeader from '../images/section-header@3x.png'

const Item = () => (
  <section id="section-header">
    <h2>Section Header</h2>
    <p>A section header should use a second-level heading. It may also include a subtitle and/or an avatar.</p>
    <p><img src={sectionHeader} alt="Section header with subtitle and avatar" width="272" /></p>
  </section>
)

export default Item
