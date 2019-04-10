import React from 'react'
import Link from 'gatsby-link'

import actionDrawerButton from '../images/action-drawer-button@3x.png'
import actionDrawerProgress from '../images/action-drawer-progress@3x.png'

const Item = () => (
  <section id="action-drawer">
    <h2>Action Drawer</h2>
    <p>A sticky drawer to highlight a single action or progress indicator. Used on detail views. <em>Note: The progress indicator has not yet been implemented.</em></p>
    <p><img src={actionDrawerButton} alt="Action drawer with button" width="375" /></p>
    <p><img src={actionDrawerProgress} alt="Action drawer with progress indicator" width="375" /></p>
    <code>
      &lt;ActionDrawer<br />
        &nbsp;&nbsp;&nbsp;message [string]<br />
        &nbsp;&nbsp;&nbsp;messageStyle [style object]<br />
        &nbsp;&nbsp;&nbsp;barStyles [style object]<br />
        &nbsp;&nbsp;&nbsp;buttonText [string]<br />
        &nbsp;&nbsp;&nbsp;buttonOnPress [function]<br />
      /&gt;
    </code>
  </section>
)

export default Item
