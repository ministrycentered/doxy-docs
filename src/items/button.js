import React from 'react'
import Link from 'gatsby-link'

import buttonPrimary from '../images/button-primary@3x.png'
import buttonSecondary from '../images/button-secondary@3x.png'
import buttonCompact from '../images/button-compact@3x.png'
import buttonMinor from '../images/button-minor@3x.png'
import buttonMinorCompact from '../images/button-minor-compact@3x.png'

const Item = () => (
  <section id="button">
    <h2>Button</h2>
    <p>
      Buttons are one of the best opportunities for consistency. As such, if other button sizes are
      needed, they should be incorporated into this library rather than creating one-off instances.
      Additional best practices:
    </p>
    <ul>
      <li>Button labels should use sentence case.</li>
      <li>Plain text links should always be rendered in turquoise.</li>
      <li>
        Actionable rows are not true buttons and follow different conventions. (See{' '}
        <Link to="#rows">Rows</Link>.)
      </li>
    </ul>
    <h3>Primary</h3>
    <p>
      <img src={buttonPrimary} alt="Primary button" width="170" />
    </p>
    <h3>Secondary</h3>
    <p>
      <img src={buttonSecondary} alt="Secondary button" width="170" />
    </p>
    <h3>Compact</h3>
    <p>
      <img src={buttonCompact} alt="Compact buttons" width="286" />
    </p>
    <h3>Minor</h3>
    <p>
      <img src={buttonMinor} alt="Minor buttons" width="254" />
    </p>
    <h3>Minor compact</h3>
    <p>
      <img src={buttonMinorCompact} alt="Minor compact buttons" width="121" />
    </p>
    <code>
      <strong>/* Button */</strong>
      <br />
      &lt;Button
      <br />
      &nbsp;&nbsp;&nbsp;[secondary | compact | minor | plain | system | disabled]
      <br />
      &nbsp;&nbsp;&nbsp;onPress [function]
      <br />
      &nbsp;&nbsp;&nbsp;onLongPress [function]
      <br />
      &nbsp;&nbsp;&nbsp;hitSlop [object]
      <br />
      &nbsp;&nbsp;&nbsp;text [string]
      <br />
      &nbsp;&nbsp;&nbsp;textStyle [style object]
      <br />
      &nbsp;&nbsp;&nbsp;bgColor [string]
      <br />
      &nbsp;&nbsp;&nbsp;style [style object]
      <br />
      &nbsp;&nbsp;&nbsp;buttonInnerStyle [style object]
      <br />
      &nbsp;&nbsp;&nbsp;icon [string]
      <br />
      &nbsp;&nbsp;&nbsp;iconType [string]
      <br />
      &nbsp;&nbsp;&nbsp;iconStyle [style object]
      <br />
      /&gt;
      <br />
      <br />
      <strong>/* TextLink */</strong>
      <br />
      &lt;TextLink
      <br />
      &nbsp;&nbsp;&nbsp;style [style object]
      <br />
      &gt;
      <br />
      &nbsp;&nbsp;&nbsp;[Link content]
      <br />
      &lt;/TextLink&gt;
    </code>
  </section>
)

export default Item
