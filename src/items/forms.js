import React from 'react'
import Link from 'gatsby-link'

import forms from '../images/forms@3x.png'

const Item = () => (
  <section id="forms">
    <h2>Forms</h2>
    <p>Currently, only input and select exist, but there will undoubtedly be a need for other form elements in the future.</p>
    <p><em>There actually is a checkbox of sorts in use, but it's currently being rendered as a button with icon that changes based on state.</em></p>
    <p><img src={forms} alt="Form elements" width="335" /></p>
    <code>
      <strong>/* Select */</strong><br />
      &lt;Select<br />
        &nbsp;&nbsp;&nbsp;onPress [function]<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
        &nbsp;&nbsp;&nbsp;label [string]<br />
        &nbsp;&nbsp;&nbsp;labelStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;title [string]<br />
        &nbsp;&nbsp;&nbsp;textStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;icon [string]<br />
        &nbsp;&nbsp;&nbsp;iconType [string]<br />
        &nbsp;&nbsp;&nbsp;iconStyle [style object]<br />
      /&gt;<br /><br />
      <strong>/* Input  (accepts the same props as a standard TextInput) */</strong><br />
      &lt;Input<br />
        &nbsp;&nbsp;&nbsp;[primary]<br />
        &nbsp;&nbsp;&nbsp;[... props]<br />
      /&gt;
    </code>
  </section>
)

export default Item
