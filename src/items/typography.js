import React from 'react'
import Link from 'gatsby-link'

const Item = () => (
  <section id="typography">
    <h2>Typography</h2>
    <p>These five typographical components are designed to help with typographical consistency throughout the app.</p>
    <p>If you need to create granular, one-off text styles, in most cases the best practice is to modify a PlainText component. This ensures that the other usages are reliable and consistent.</p>
    <code>
      <strong>/* Heading */</strong><br />
      &lt;Heading<br />
        &nbsp;&nbsp;&nbsp;onPress [function]<br />
        &nbsp;&nbsp;&nbsp;level [number: 1, 2, 3, 4]<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
        &nbsp;&nbsp;&nbsp;numberOfLines [number]<br />
      &gt;<br />
        &nbsp;&nbsp;&nbsp;[Text content]<br />
      &lt;/Heading&gt;<br /><br />

      <strong>/* All others */</strong><br />
      &lt;[PlainText | SecondaryText | TertiaryText | Footnote]<br />
        &nbsp;&nbsp;&nbsp;onPress [function]<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
        &nbsp;&nbsp;&nbsp;numberOfLines [number]<br />
      &gt;<br />
        &nbsp;&nbsp;&nbsp;[Text content]<br />
      &lt;/[PlainText | SecondaryText | TertiaryText | Footnote]&gt;<br /><br />
    </code>
  </section>
)

export default Item
