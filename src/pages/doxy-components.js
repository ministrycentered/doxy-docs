import React from 'react';
import Link from 'gatsby-link';
import { View } from 'react-native';

import Layout from '../components/layout';
// import ActionDrawer from '../items/action-drawer'
// import Avatar from '../items/avatar'
// import Badge from '../items/badge'
// import Button from '../items/button'
// import Card from '../items/card'
// import ExpandingText from '../items/expanding-text'
// import Forms from '../items/forms'
// import Highlight from '../items/highlight'
// import Icon from '../items/icon'
// import Image from '../items/image'
// import Row from '../items/row'
// import Shelf from '../items/shelf'
// import SiteHeader from '../items/site-header'
// import Typography from '../items/typography'

import {
  colors,
  space,
  Avatar,
  ActionBar,
  Badge,
  DoxyButton,
  TextLink,
  Heading,
  PlainText,
  SecondaryText,
  TertiaryText,
  Footnote,
  DoxySpinner,
  ExpandingText,
  Card,
  Input,
  Select,
  RowGroup,
  Row,
} from '../doxy/';

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Components</h1>

      <View>
        <Heading level={1} style={{ marginBottom: space(2) }}>
          This is a Doxy level 1 heading!
        </Heading>
      </View>
      <View>
        <Heading level={2} style={{ marginBottom: space(2) }}>
          This is a Doxy level 2 heading!
        </Heading>
      </View>
      <View>
        <Heading level={3} style={{ marginBottom: space(2) }}>
          This is a Doxy level 3 heading!
        </Heading>
      </View>
      <View>
        <Heading level={4} style={{ marginBottom: space(2) }}>
          This is a Doxy level 4 heading!
        </Heading>
      </View>
      <View>
        <Heading level={5} style={{ marginBottom: space(2) }}>
          This is a Doxy level 5 heading!
        </Heading>
      </View>
      <View>
        <PlainText style={{ marginBottom: space(2) }}>
          PlainText test.
        </PlainText>
      </View>
      <View>
        <SecondaryText style={{ marginBottom: space(2) }}>
          SecondaryText test.
        </SecondaryText>
      </View>
      <View>
        <TertiaryText style={{ marginBottom: space(2) }}>
          TertiaryText test.
        </TertiaryText>
      </View>
      <View>
        <Footnote style={{ marginBottom: space(2) }}>Footnote test.</Footnote>
      </View>

      <DoxyButton
        text="Test primary button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        secondary
        text="Test button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        disabled
        text="Test primary button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        compact
        text="Test compact button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        compact
        secondary
        text="Test compact button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        compact
        disabled
        text="Test compact button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        minor
        text="Test button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <DoxyButton
        minor
        secondary
        text="Test button!"
        style={{ alignSelf: 'flex-start', marginTop: space(3) }}
      />
      <TextLink>Test text link</TextLink>
      <ActionBar
        message="Test ActionDrawer"
        buttonText="Register"
        buttonOnPress={() => {}}
      />
      <View style={{ flexDirection: 'row' }}>
        <Avatar style={{ marginRight: space(1) }} text="DD" />
        <Avatar image="https://placekitten.com/200/200" />
      </View>

      <DoxySpinner size={50} />
      <ExpandingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper enim ita
        adsumit aliquid, ut ea, quae prima dederit, non deserat. An hoc usque
        quaque, aliter in vita? Vide, ne etiam menses! nisi forte eum dicis,
        qui, simul atque arripuit, interficit. Sin te auctoritas commovebat,
        nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? An me,
        inquis, tam amentem putas, ut apud imperitos isto modo loquar?
      </ExpandingText>

      <View style={{ flexDirection: 'row' }}>
        <Badge style={{ marginRight: space(1) }}>40 available</Badge>
        <Badge style={{ marginRight: space(1) }}>Campus: West Hills</Badge>
        <Badge
          style={{ backgroundColor: colors.ruby, marginRight: space(1) }}
          textStyle={{ color: 'white' }}
        >
          Sold Out
        </Badge>
        <Badge
          style={{
            backgroundColor: colors.emerald
              .replace('hsl', 'hsla')
              .replace(')', ', 0.2)'),
            marginRight: space(1),
          }}
          textStyle={{ color: colors.emerald }}
        >
          Open
        </Badge>
      </View>
      <Card
        title="Church Youth Retreat"
        subtitle="Begins May 2, 2018"
        image="https://placekitten.com/300/200"
        badge="$160-240"
        onPress={() => {}}
      />

      <Card
        secondary
        title="Church Youth Retreat"
        image="https://placekitten.com/300/200"
        onPress={() => {}}
      />

      <Input primary />
      <Select label="Select" />

      <RowGroup title="Row Group">
        <Row
          title="Test Row"
          description="The quick brown fox jumped over the lazy dog."
          avatar="https://placekitten.com/150/150"
        />
      </RowGroup>
    </div>
  </Layout>
);

export default IndexPage;
