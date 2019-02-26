import React from 'react'
import Link from 'gatsby-link'

import row from '../images/row@3x.png'
import rowRobust from '../images/row-robust@3x.png'
import rowItems from '../images/row-items@3x.png'

const Item = () => (
  <section id="row">
    <h2>Row</h2>
    <p>Rows are still a work in progress. It's to be determined whether other types of rows should be implemented within this component or as separate types.</p>
    <p>A row should have a title and either an avatar, graphic, OR icon. It can optionally also have a subtitle and description.</p>
    <p><img src={rowItems} alt="Items in a row" width="176" /></p>
    <p><img src={row} alt="Simple row" width="335" /></p>
    <p><img src={rowRobust} alt="Robust row" width="335" /></p>
    <code>
      &lt;RowGroup<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
        &nbsp;&nbsp;&nbsp;title [string]<br />
        &nbsp;&nbsp;&nbsp;buttonText [string]<br />
        &nbsp;&nbsp;&nbsp;onPress [function]<br />
        &nbsp;&nbsp;&nbsp;hitSlop [object]<br />
      &gt;<br />
        &nbsp;&nbsp;&nbsp;&lt;Row<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onPress [function]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hitSlop [object]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style [style object]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;titleRight [component]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtitle [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageSize [number]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatar [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatarText [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;icon [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;graphic [array: day, month]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageStyle [style object]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;graphicTextStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;&gt;/Row&lt;<br />
      &lt;/RowGroup&gt;
    </code>
  </section>
)

export default Item
