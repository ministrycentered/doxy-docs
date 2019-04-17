import React from 'react'
import Link from 'gatsby-link'

const Item = () => (
  <section id="expanding-text">
    <h2>Expanding Text</h2>
    <p>
      This is essentially a helper component. It adds a "read more" link to expand content inline
      for a string over 108 characters. (Why 108? A string that long, plus "read more", renders
      nicely in 2-3 lines across various mobile screen sizes.)
    </p>
    <p>
      <em>
        This is a very naive component at the moment. I could definitely see a case for expanding it
        to accommodate style props, among others, in the future.
      </em>
    </p>

    <code>&lt;ExpandingText&gt;[Content]&lt;/ExpandingText&gt;</code>
  </section>
)

export default Item
