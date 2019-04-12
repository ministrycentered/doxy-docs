import React, { Component } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
// import FastImage from 'react-native-fast-image'

import colors from './colors'
import { Badge } from './badge'
import { DoxyImage } from './image'
import { Heading, PlainText, TertiaryText } from './typography'
import { platformMargin } from './grid'

class Card extends Component {
  state = {
    width: 0,
  }

  render() {
    const cardWidth = this.state.width 

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View
          style={[
            styles.card,
            this.props.secondary && styles.secondaryCard,
            this.props.style,
          ]}
          onLayout={(e) => {
            this.setState({
              width: e.nativeEvent.layout.width
            })
          }}
        >
          {this.props.image && (
            <DoxyImage
              style={[
                styles.visual,
                this.props.secondary && styles.secondaryImage,
                !this.props.secondary && {
                  height: cardWidth * (9 / 16),
                },
              ]}
              // resizeMode={this.props.resizeMode ? this.props.resizeMode : FastImage.resizeMode.cover}
              source={{
                uri: this.props.image,
                // priority: FastImage.priority.normal
              }}
            />
          )}
          {this.props.placeholder && (
            <View
              style={[
                styles.visual,
                styles.placeholder,
                this.props.placeholderStyle,
                !this.props.secondary && {
                  height: cardWidth * (9 / 16),
                },
              ]}
            >
              {this.props.placeholder}
            </View>
          )}
          <View
            style={[
              this.props.children
                ? styles.detailsWithDescription
                : styles.details,
              this.props.secondary && styles.secondaryDetails,
            ]}
          >
            <View style={styles.text}>
              <Heading
                level={3}
                numberOfLines={3}
                style={[
                  styles.title,
                  this.props.secondary && styles.secondaryTitle,
                ]}
              >
                {this.props.title}
              </Heading>
              {this.props.subtitle && (
                <TertiaryText style={{ marginTop: 4 }}>
                  {this.props.subtitle}
                </TertiaryText>
              )}
              {this.props.children && (
                <PlainText style={{ marginTop: 8 }}>
                  {this.props.children}
                </PlainText>
              )}
            </View>
            {this.props.badge && (
              <Badge
                style={[
                  this.props.children
                    ? styles.badgeWithDescription
                    : styles.badge,
                  this.props.badgeStyle,
                ]}
                textStyle={this.props.badgeTextStyle}
              >
                {this.props.badge}
              </Badge>
            )}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  visual: {
    height: 192,
    width: '100%',
    borderRadius: 4,
    marginBottom: 12,
  },
  placeholder: {
    backgroundColor: colors.gray100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsWithDescription: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    flex: 1,
  },
  badge: {
    marginLeft: 16,
  },
  badgeWithDescription: {
    marginTop: 12,
  },

  secondaryCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  secondaryImage: {
    height: 60,
    width: 108,
    marginRight: 12,
    marginBottom: 0
  },
  secondaryTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.gray800,
  },
  secondaryDetails: {
    flex: 1,
    flexDirection: 'column',
  },
})

export { Card }
