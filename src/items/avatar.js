import React from 'react'
import Link from 'gatsby-link'

import avatarSmall from '../images/avatar-small@3x.png'
import avatarMedium from '../images/avatar-medium@3x.png'

const Item = () => (
  <section id="avatar">
    <h2>Avatar</h2>
    <p>
      For consistency, avatars should always be circles and, if displayed with text, should be to
      the left of the text.
    </p>
    <p>
      If an image isn't available — like if a person hasn't uploaded a profile picture — text
      (usually one or two initials) should be passed to the component instead.
    </p>
    <p>
      <img src={avatarSmall} alt="Small avatar" width="218" />
    </p>
    <p>
      <img src={avatarMedium} alt="Medium avatar" width="204" />
    </p>
    <code>
      &lt;Avatar
      <br />
      &nbsp;&nbsp;&nbsp;size [number]
      <br />
      &nbsp;&nbsp;&nbsp;image [string]
      <br />
      &nbsp;&nbsp;&nbsp;style [style object]
      <br />
      &nbsp;&nbsp;&nbsp;text [string]
      <br />
      &nbsp;&nbsp;&nbsp;textStyle [style object]
      <br />
      /&gt;
    </code>
  </section>
)

export default Item
