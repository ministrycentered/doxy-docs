import React from 'react'
import Link from 'gatsby-link'

import siteHeader from '../images/site-header@3x.png'
import siteHeaderDetail from '../images/site-header-detail@3x.png'
import siteHeaderSubnav from '../images/site-header-subnav@3x.png'
import siteHeaderFilter from '../images/site-header-filter@3x.png'

const Item = () => (
  <section id="site-header">
    <h2>Site Header (browser only)</h2>
    <p>By default, the site header includes the organization logo and a hamburger menu for mobile. While a hamburger menu often requires too many tradeoffs, it makes sense in this context for a few reasons:</p>
    <ul>
      <li>Discoverabilty is not a chief concern. It’s more common to come to Church Center to accomplish a specific task (donate, register for an event, etc.) than to explore.</li>
      <li>We (will) have an installed app that will provide a first-class mobile experience. The web experience is a supplement for accomplishing specific tasks (see above).</li>
      <li>The number of items in the menu is highly variable. Many orgs will only have giving and profile management, for example. Or on a form, we may want to lock down the menu experience so that logging out is the only available action.</li>
    </ul>
    <p><img src={siteHeader} alt="Site header" width="375" /></p>

    <p>On a detail view (such as an individual group or event), we’ll also provide a “back” button to return to the category listing.</p>
    <p><img src={siteHeaderDetail} alt="Site header for detail view" width="375" /></p>

    <p>In some cases, subnavigation is needed and should be more discoverable than what a hamburger menu provides. In this case, we’ll provide a dropdown menu that doubles as the page title.</p>
    <p><img src={siteHeaderSubnav} alt="Site header with subnavigation" width="375" /></p>

    <p>And in some other cases, more robust tools are needed, such as filtering and search. In this case, an expanding search is added, and the dropdown menu is replaced by a filter menu (which is essentially a multidimensional dropdown menu).</p>
    <p><img src={siteHeaderFilter} alt="Site header with filter and search" width="375" /></p>
  </section>
)

export default Item
