import React from 'react';
import { View } from 'react-native';

import Layout from '../components/layout';
import {
  colors,
  space,
  Avatar,
  ActionBar,
  Badge,
  DoxyButton,
  DoxyIcon,
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

function IndexPage() {
  return (
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
          icon="plus"
          iconType="FontAwesome"
          text="Add donation"
          style={{ alignSelf: 'flex-start', marginVertical: space(3) }}
        />

        <DoxyButton
          minor
          compact
          text="Edit"
          icon="pencil"
          iconType="FontAwesome"
          style={{ alignSelf: 'flex-start', marginBottom: space(2) }}
        />

        <DoxyButton
          minor
          compact
          text="Remove"
          icon="close"
          iconType="FontAwesome"
          iconStyle={{ color: colors.ruby }}
          textStyle={{ color: colors.ruby }}
          style={{ alignSelf: 'flex-start', marginVertical: space(0) }}
        />

        <DoxyButton
          plain
          text="Test plain button!"
          style={{ alignSelf: 'flex-start', marginVertical: space(2) }}
        />

        <DoxyButton
          system
          text="Test plain button!"
          style={{ alignSelf: 'flex-start', marginBottom: space(2) }}
        />

        <View style={{ flexDirection: 'row', marginBottom: space(3) }}>
          <TextLink style={{ alignSelf: 'flex-start' }}>
            Test text link
          </TextLink>
        </View>

        <ActionBar
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
          message="Test ActionDrawer"
          buttonText="Register"
          buttonOnPress={() => {}}
        />
        <View style={{ flexDirection: 'row', marginVertical: space(3) }}>
          <Avatar style={{ marginRight: space(1) }} text="DD" />
          <Avatar image="https://placekitten.com/200/200" />
        </View>
        <View
          style={{
            flex: 0,
            justifyContent: 'flex-start',
            marginVertical: space(3),
          }}
        >
          <DoxySpinner size={50} />
        </View>
        <ExpandingText style={{ marginVertical: space(3) }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper enim
          ita adsumit aliquid, ut ea, quae prima dederit, non deserat. An hoc
          usque quaque, aliter in vita? Vide, ne etiam menses! nisi forte eum
          dicis, qui, simul atque arripuit, interficit. Sin te auctoritas
          commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
          anteponebas? An me, inquis, tam amentem putas, ut apud imperitos isto
          modo loquar?
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
          <Badge
            style={{
              backgroundColor: 'white',
              marginRight: space(1),
            }}
            textStyle={{ color: colors.emerald }}
          >
            <DoxyIcon
              name="check"
              type="FontAwesome"
              style={{
                fontSize: 12,
                lineHeight: 16,
                marginRight: space(0.5),
                color: colors.emerald,
              }}
            />
            Open
          </Badge>
        </View>
        <Card
          style={{ marginVertical: space(2), maxWidth: 600 }}
          title="Church Youth Retreat"
          subtitle="Begins May 2, 2018"
          image="https://placekitten.com/900/650"
          badge="$160-240"
          onPress={() => {}}
        />

        <Card
          secondary
          style={{ marginVertical: space(2) }}
          title="Church Youth Retreat"
          image="https://placekitten.com/300/200"
          onPress={() => {}}
        />

        <Input
          primary
          placeholder="Input placeholder"
          style={{ marginVertical: space(2) }}
        />
        <Select label="Select" style={{ marginVertical: space(2) }} />

        <RowGroup title="Row Group">
          <Row
            style={{ marginVertical: space(1) }}
            title="Test Row"
            description="The quick brown fox jumped over the lazy dog."
            avatar="https://placekitten.com/150/150"
          />
        </RowGroup>

        <View>
          <DoxyIcon
            name="image"
            type="FontAwesome"
            style={{ color: colors.gray400, fontSize: 24 }}
          />
        </View>
      </div>
    </Layout>
  );
}

export default IndexPage;
