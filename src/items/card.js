import React from 'react'
import Link from 'gatsby-link'

import card from '../images/card@3x.png'
import cardCollage from '../images/card-collage@3x.png'
import cardCondensed from '../images/card-condensed@3x.png'

const Item = () => (
  <section id="card">
    <h2>Card</h2>
    <p>A card always has an image and title; it can optionally include a subtitle, description, and/or badge (or button). If the card includes a description and a badge, the badge should be displayed below the description; otherwise, it should be displayed at the right.</p>
    <p><em>Only the rudimentary card has been implemented. The second and third example card styles shown here are not currently in use.</em></p>

    <p><img src={card} alt="Simple card" width="335" /></p>
    <p><img src={cardCollage} alt="Collage card" width="335" /></p>
    <p><img src={cardCondensed} alt="Condensed card" width="271" /></p>

    <code>
      &lt;Card<br />
        &nbsp;&nbsp;&nbsp;onPress [function]<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
        &nbsp;&nbsp;&nbsp;title [string]<br />
        &nbsp;&nbsp;&nbsp;subtitle [string]<br />
        &nbsp;&nbsp;&nbsp;image [string]<br />
        &nbsp;&nbsp;&nbsp;placeholder [element]<br />
        &nbsp;&nbsp;&nbsp;placeholderStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;badge [string]<br />
        &nbsp;&nbsp;&nbsp;badgeStyle [style object]<br />
      &gt;<br />
        &nbsp;&nbsp;&nbsp;[Optional description content]<br />
      &lt;/Card&gt;
    </code>

  </section>
)

export default Item
