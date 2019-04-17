import React from 'react'
import Link from 'gatsby-link'

import badges from '../images/badges@3x.png'

const Item = () => (
  <section id="badge">
    <h2>Badge</h2>
    <p>
      To differentiate badges from buttons, badges should be tighter, lighter, and less rounded. The
      exception to the <em>lighter</em> rule are danger badges, which are designed for attention and
      should be used sparingly. There are no outlined badges.
    </p>
    <p>
      <img src={badges} alt="Badges" width="448" />
    </p>
    <code>
      &lt;Badge
      <br />
      &nbsp;&nbsp;&nbsp;label [string]
      <br />
      &nbsp;&nbsp;&nbsp;style [style object]
      <br />
      &nbsp;&nbsp;&nbsp;textStyle [style object]
      <br />
      &gt;
      <br />
      &nbsp;&nbsp;&nbsp;[Badge content]
      <br />
      &lt;/Badge&gt;
    </code>
  </section>
)

export default Item
