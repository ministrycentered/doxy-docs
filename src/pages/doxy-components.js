import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import ActionDrawer from '../items/action-drawer'
import Avatar from '../items/avatar'
import Badge from '../items/badge'
import Button from '../items/button'
import Card from '../items/card'
import ExpandingText from '../items/expanding-text'
import Forms from '../items/forms'
import Highlight from '../items/highlight'
import Icon from '../items/icon'
import Image from '../items/image'
import Row from '../items/row'
import Shelf from '../items/shelf'
import SiteHeader from '../items/site-header'
import Typography from '../items/typography'

import { Heading } from '../doxy/'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Components</h1>
      <p>This preliminary component library is a work in progress, likely incomplete, and has currently only been explored for mobile. Tablet and desktop considerations to follow.</p>
      <p>If you’re interested in playing with these components, you can <a href="https://drive.google.com/file/d/1_Yw06QVvHVkGeod7Cw0j4MyZSNbgfMFD/view?usp=sharing">grab the XD file</a>. You can also <a href="https://drive.google.com/file/d/1vaD35GMHK89oYN502owZSV_Nj0JJ6P5U/view?usp=sharing">peek at the views I created</a> for initial proof of concept.</p>

      <Heading level={1}>This is a Doxy heading!</Heading>

      <ActionDrawer />
      <Avatar />
      <Badge />
      <Button />
      <Card />
      <ExpandingText />
      <Forms />
      <Highlight />
      <Icon />
      <Image />
      <Row />
      <Shelf />
      <SiteHeader />
      <Typography />
    </div>
  </Layout>
)

export default IndexPage