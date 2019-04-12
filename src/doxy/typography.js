import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { smartypantsu } from 'smartypants'
// import { DoxyIcon } from './icon'

import colors from './colors'

function smartenQuotes(child) {
  return typeof child === 'string' ? smartypantsu(child) : child
}

class Heading extends Component {
  render() {
    const level = styles.hasOwnProperty(`heading${this.props.level}`)
      ? styles[`heading${this.props.level}`]
      : null

    return (
      <Text
        accessibilityRole="heading"
        aria-level={this.props.level}
        style={[styles.global, level, this.props.style]}
        allowFontScaling={this.props.allowFontScaling}
        adjustsFontSizeToFit={this.props.adjustsFontSizeToFit}
        minimumFontScale={this.props.minimumFontScale}
        numberOfLines={this.props.numberOfLines}
        onPress={this.props.onPress}
      >
        {this.props.level === 4
          ? smartenQuotes(this.props.children).toUpperCase()
          : smartenQuotes(this.props.children)}
      </Text>
    )
  }
}

// class LinkedHeading extends Component {
//   render() {
//     return (
//       <TouchableOpacity onPress={this.props.onPress} style={styles.linkedHeading}>
//         <Heading
//           level={this.props.level}
//           style={this.props.style}
//           numberOfLines={this.props.numberOfLines}
//         >
//           {smartenQuotes(this.props.children)}{' '}
//         </Heading>
//         <DoxyIcon style={[styles.linkedHeadingIcon]} name={'chevron-thin-right'} type={'Entypo'} />
//       </TouchableOpacity>
//     )
//   }
// }

class PlainText extends Component {
  render() {
    return (
      <Text
        accessibilityRole="p"
        style={[styles.global, styles.plain, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        onPress={this.props.onPress}
      >
        {smartenQuotes(this.props.children)}
      </Text>
    )
  }
}

class SecondaryText extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.secondary, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        allowFontScaling={this.props.allowFontScaling}
        adjustsFontSizeToFit={this.props.adjustsFontSizeToFit}
        minimumFontScale={this.props.minimumFontScale}
        onPress={this.props.onPress}
      >
        {smartenQuotes(this.props.children)}
      </Text>
    )
  }
}

class TertiaryText extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.tertiary, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        allowFontScaling={this.props.allowFontScaling}
        adjustsFontSizeToFit={this.props.adjustsFontSizeToFit}
        minimumFontScale={this.props.minimumFontScale}
        onPress={this.props.onPress}
      >
        {smartenQuotes(this.props.children)}
      </Text>
    )
  }
}

class Footnote extends Component {
  render() {
    return (
      <Text
        style={[styles.global, styles.footnote, this.props.style]}
        numberOfLines={this.props.numberOfLines}
        allowFontScaling={this.props.allowFontScaling}
        adjustsFontSizeToFit={this.props.adjustsFontSizeToFit}
        minimumFontScale={this.props.minimumFontScale}
        onPress={this.props.onPress}
      >
        {smartenQuotes(this.props.children)}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  global: {
    fontFamily: Platform.select({
      ios: 'System',
      android: 'normal'
    })
  },
  heading1: {
    color: colors.gray900,
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 32
  },
  heading2: {
    color: colors.gray900,
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 24
  },
  heading3: {
    color: colors.gray900,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22
  },
  heading4: {
    color: colors.gray600,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20
  },
  linkedHeadingIcon: {
    color: colors.gray700,
    fontSize: 16,
    bottom: -4
  },
  linkedHeading: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  plain: {
    color: colors.gray800,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24
  },
  secondary: {
    color: colors.gray800,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24
  },
  tertiary: {
    color: colors.gray800,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20
  },
  footnote: {
    color: colors.gray600,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16
  }
})

export { smartenQuotes, Heading, PlainText, SecondaryText, TertiaryText, Footnote }
