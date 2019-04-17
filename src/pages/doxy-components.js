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
          <Heading
            level={2}
            style={{ marginVertical: space(2), marginTop: space(4) }}
          >
            Typography
          </Heading>
        </View>
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
            The is a PlainText component.
          </PlainText>
        </View>
        <View>
          <SecondaryText style={{ marginBottom: space(2) }}>
            This is a SecondaryText component.
          </SecondaryText>
        </View>
        <View>
          <TertiaryText style={{ marginBottom: space(2) }}>
            This is a TertiaryText component.
          </TertiaryText>
        </View>
        <View>
          <Footnote style={{ marginBottom: space(2) }}>
            This is a Footnote component.
          </Footnote>
        </View>

        <View>
          <Heading level={2} style={{ marginTop: space(4) }}>
            Buttons
          </Heading>
        </View>
        <DoxyButton
          text="Primary"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          secondary
          text="Secondary"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          disabled
          text="Primary Disabled"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          compact
          text="Compact"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          compact
          secondary
          text="Compact Secondary"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          compact
          disabled
          text="Compact Disabled"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          minor
          text="Minor"
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
        />
        <DoxyButton
          minor
          secondary
          icon="plus"
          iconType="FontAwesome"
          text="Minor Secondary"
          style={{ alignSelf: 'flex-start', marginVertical: space(3) }}
        />

        <DoxyButton
          minor
          compact
          text="Minor Compact"
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
          text="Plain"
          style={{ alignSelf: 'flex-start', marginVertical: space(2) }}
        />

        <DoxyButton
          system
          text="System"
          style={{ alignSelf: 'flex-start', marginBottom: space(2) }}
        />

        <View style={{ flexDirection: 'row', marginBottom: space(3) }}>
          <TextLink style={{ alignSelf: 'flex-start' }}>Text link</TextLink>
        </View>

        <View>
          <Heading
            level={2}
            style={{ marginTop: space(4), marginBottom: space(2) }}
          >
            Action Drawer
          </Heading>
        </View>
        <ActionBar
          style={{ alignSelf: 'flex-start', marginTop: space(3) }}
          message="ActionDrawer"
          buttonText="Register"
          buttonOnPress={() => {}}
        />

        <View>
          <Heading level={2} style={{ marginTop: space(4) }}>
            Avatar
          </Heading>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: space(3) }}>
          <Avatar style={{ marginRight: space(1) }} text="DD" />
          <Avatar image="https://placekitten.com/200/200" />
        </View>

        <View>
          <Heading
            level={2}
            style={{ marginTop: space(4), marginBottom: space(2) }}
          >
            Spinner
          </Heading>
        </View>
        <View
          style={{
            flex: 0,
            width: 100,
            justifyContent: 'flex-start',
            marginVertical: space(3),
          }}
        >
          <DoxySpinner size={50} />
        </View>

        <View>
          <Heading level={2} style={{ marginTop: space(4) }}>
            Expanding Text
          </Heading>
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

        <View>
          <Heading level={2} style={{ marginVertical: space(2) }}>
            Badge
          </Heading>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Badge style={{ marginRight: space(1) }} textStyle={{ fontSize: 12 }}>
            40 available
          </Badge>
          <Badge style={{ marginRight: space(1) }} textStyle={{ fontSize: 12 }}>Campus: West Hills</Badge>
          <Badge
            style={{ backgroundColor: colors.ruby, marginRight: space(1) }}
            textStyle={{ fontSize: 12, color: 'white' }}
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
            textStyle={{ fontSize: 12, color: colors.emerald }}
          >
            Open
          </Badge>
          <Badge
            style={{
              backgroundColor: 'white',
              marginRight: space(1),
            }}
            textStyle={{ fontSize: 12, color: colors.emerald }}
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

        <View>
          <Heading
            level={2}
            style={{ marginVertical: space(1), marginTop: space(4) }}
          >
            Card
          </Heading>
        </View>
        <Card
          style={{ marginVertical: space(2), maxWidth: 300 }}
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

        <View>
          <Heading
            level={2}
            style={{ marginVertical: space(1), marginTop: space(4) }}
          >
            Forms
          </Heading>
        </View>
        <Input
          primary
          placeholder="Input placeholder"
          style={{ marginVertical: space(2) }}
        />
        <Select label="Select" style={{ marginVertical: space(2) }} />

        <View>
          <Heading
            level={2}
            style={{ marginVertical: space(2), marginTop: space(4) }}
          >
            Row
          </Heading>
        </View>
        <RowGroup
          title="Row Group Title"
          buttonText="Subscribe"
          style={{ width: 300 }}
        >
          <Row
            style={{ marginVertical: space(1) }}
            title="Test Row"
            subtitle="The quick brown fox jumped over the lazy dog."
            avatar="https://placekitten.com/150/150"
          />

          <Row
            style={{ marginVertical: space(1) }}
            title="Another Test Row"
            subtitle="The quick brown fox jumped over the lazy dog."
            avatar="https://placekitten.com/250/250"
          />

          <Row
            style={{ marginVertical: space(1) }}
            title="Yet Another Test Row"
            subtitle="The quick brown fox jumped over the lazy dog."
            avatarText="KD"
          />
        </RowGroup>

        <View>
          <Heading
            level={2}
            style={{ marginVertical: space(1), marginTop: space(4) }}
          >
            Icon
          </Heading>
        </View>
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
