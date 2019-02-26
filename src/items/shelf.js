import React from 'react'

import shelf from '../images/shelf@2x.png'

const Item = () => (
  <section id="shelf">
    <h2>Shelf</h2>
    <p>A shelf is a horizontally scrolling view with any number of shelf item components inside it. Shelf items are simple components with an optional label and one line of content (default) or a child element (multiline).</p>
    <p><img src={shelf} alt="Shelf" width="339" /></p>
    <code>
      &lt;Shelf<br />
        &nbsp;&nbsp;&nbsp;style [style object]<br />
        &nbsp;&nbsp;&nbsp;containerStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;contentContainerStyle [style object]<br />
      &gt;<br />
        &nbsp;&nbsp;&nbsp;&lt;ShelfItem<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[multiline]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label [string]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labelStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Item content]<br />
        &nbsp;&nbsp;&nbsp;&lt;/ShelfItem&gt;<br />
        &nbsp;&nbsp;&nbsp;[...]<br />
      &lt;/Shelf&gt;
    </code>
  </section>
)

export default Item
