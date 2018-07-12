import React from 'react'
import Link from 'gatsby-link'

import highlight from '../images/highlight@2x.png'

const Item = () => (
  <section id="highlight">
    <h2>Highlight</h2>
    <p>A highlight block is a flexible content component for detail views. It always includes a title and description and can optionally include an image.</p>
    <p><img src={highlight} alt="Highlights" width="239" /></p>
    <code>
      &lt;Highlight<br />
        &nbsp;&nbsp;&nbsp;title [string]<br />
        &nbsp;&nbsp;&nbsp;description [string]<br />
        &nbsp;&nbsp;&nbsp;image [string]<br />
      /&gt;
    </code>
  </section>
)

export default Item
