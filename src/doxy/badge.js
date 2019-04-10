import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import colors from './colors'

class Badge extends Component {
  render() {
    return (
      <View style={[styles.badge, this.props.style]}>
        <Text style={[styles.global, styles.badgeText, this.props.textStyle]}>
          {this.props.label && <Text style={styles.badgeLabel}>{this.props.label} </Text>}
          {this.props.children}
        </Text>
      </View>
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
  badge: {
    backgroundColor: colors.gray100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  badgeText: {
    color: colors.gray700,
    fontWeight: '400',
    fontSize: 14
  },
  badgeLabel: {
    fontWeight: '700'
  }
})

export { Badge }
