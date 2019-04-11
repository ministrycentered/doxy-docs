import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import logoPrimary from '../images/logo-primary@2x.png'
import invertedSquircle from '../images/logo-squircle@2x.png'
import logoCompact from '../images/logo-compact@2x.png'
import exampleList from '../images/spacing-example-list@2x.png'
import exampleButton from '../images/spacing-example-button@2x.png'
import exampleHighlights from '../images/spacing-example-highlights@2x.png'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Doxy: A Design System</h1>
      <p>Church Center sits in a unique position amongst our apps. It needs to be consistent with our existing apps for continuity — but because it’s congregant facing, it also needs to be more neutral and read less administrative. This design system is part of an evolving attempt to capture those ideas and apply them to both the installed and online Church Center experience.</p>
      <h2 id="logo">Logo</h2>
      <p>Our logo is designed as a simple rendering of a church, with a subtle Gothic arch and an abstract person shape in the whitespace. The logotype is consistent with the other Planning Center apps. When displayed alone, or within the app itself, the primary version should be used. When displayed alongside other apps, the inverted squircle should be used. At small sizes, especially in a landscape orientation, the compact version should be used.</p>
      <p className="captioned-image"><img src={logoPrimary} alt="Primary" /><caption>Primary</caption></p>
      <p className="captioned-image"><img src={invertedSquircle} alt="Inverted Squircle" /><caption>Inverted Squircle</caption></p>
      <p className="captioned-image"><img src={logoCompact} alt="Compact" /><caption>Compact</caption></p>

      <h2 id="color">Color</h2>
      <p>Because Church Center is a platform for churches across the geographic, demographic, and denominational spectrum, our intent is to remain as stylistically neutral as possible. When it comes to color, this means using a robust palette of grays with accent colors primarily to denote action or state. It may be appropriate to use color to add personality or interest but such use should be explored judiciously.</p>
      <ul className="swatches color-swatches">
        <li style={{ background: '#42a5f5' }}>topaz <em>#42a5f5</em></li>
        <li style={{ background: '#4db6ac' }}>turquoise <em>#4db6ac</em></li>
        <li style={{ background: '#66bb6a' }}>emerald <em>#66bb6a</em></li>
        <li style={{ background: '#ef5350' }}>ruby <em>#ef5350</em></li>
        <li style={{ background: '#212121' }}>gray900 <em>#212121</em></li>
        <li style={{ background: '#424242' }}>gray800 <em>#424242</em></li>
        <li style={{ background: '#757575' }}>gray700 <em>#757575</em></li>
        <li style={{ background: '#9e9e9e' }}>gray600 <em>#9e9e9e</em></li>
        <li style={{ background: '#bdbdbd' }}>gray500 <em>#bdbdbd</em></li>
        <li style={{ background: '#cecece' }} className="dark">gray400 <em>#cecece</em></li>
        <li style={{ background: '#e0e0e0' }} className="dark">gray300 <em>#e0e0e0</em></li>
        <li style={{ background: '#eeeeee' }} className="dark">gray200 <em>#eeeeee</em></li>
        <li style={{ background: '#f3f3f3' }} className="dark">gray100 <em>#f3f3f3</em></li>
        <li style={{ background: '#f7f7f7' }} className="dark">gray50 <em>#f7f7f7</em></li>
        <li style={{ background: '#fafafa' }} className="dark">gray25 <em>#fafafa</em></li>
      </ul>

      <h2 id="typography">Typograpy</h2>
      <p>Church Center, both installed and on the web, should use a system font stack — generally San Francisco for MacOS and iOS, Roboto for Android, Segoe UI for Windows, and a fallback to Helvetica and Arial if none of those typefaces are available.</p>
      <p>The sizes below are for desktop and may be scaled on smaller devices.</p>
      <ul className="swatches type-swatches">
        <li>
          <h1>Heading 1</h1>
          <caption>400 / 25 / 32 / gray900</caption>
        </li>
        <li>
          <h2>Heading 2</h2>
          <caption>500 / 21 / 28 / gray900</caption>
        </li>
        <li>
          <h3>Heading 3, Normal Label</h3>
          <caption>600 / 16 / 24 / gray900</caption>
        </li>
        <li>
          <h4>Heading 4, Definition Title, Small Label</h4>
          <caption>600 / uppercase / 14 / 20 / gray600</caption>
        </li>
        <li>
          <p>Body Text</p>
          <caption>400 / 16 / 24 / gray800</caption>
        </li>
      </ul>

      <h2 id="layout">Layout & Spacing</h2>
      <p>We're using an 8px grid system, with 4px increments below 32px (i.e. 4px, 12px, 20px, and 28px are allowable) and as needed for fine-tuning. Some examples:</p>
      <p><img src={exampleList} alt="Spacing example: List" width="384" /></p>
      <p><img src={exampleButton} alt="Spacing example: Button" width="178" /></p>
      <p><img src={exampleHighlights} alt="Spacing example: Highlights" width="335" /></p>
      <h2 id="illustration">Illustration</h2>
      <p>TK. Some designer words about being neutral and refined and engaging and stuff.</p>
    </div>
  </Layout>
)

export default IndexPage
