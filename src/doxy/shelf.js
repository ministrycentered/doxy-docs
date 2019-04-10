import React, { Component } from 'react'
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

import colors from './colors'
import { PlainText, SecondaryText } from './typography'

class Shelf extends Component {
  render() {
    return (
      <View style={[styles.shelfContainer, this.props.style]}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={this.props.contentContainerStyle}
          style={[styles.scrollViewContainer, this.props.containerStyle]}
        >
          {this.props.children}
        </ScrollView>
      </View>
    )
  }
}

class ShelfItem extends Component {
  render() {
    return (
      <View style={styles.itemContainer}>
        {!this.props.plain && <View style={styles.itemMarker} />}
        {this.props.label && (
          <View>
            <PlainText style={[styles.itemLabel, this.props.labelStyle]}>
              {this.props.label}
            </PlainText>
          </View>
        )}
        <View>
          {!this.props.multiline && <SecondaryText>{this.props.children}</SecondaryText>}
          {this.props.multiline && this.props.children}
        </View>
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
  shelfContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  scrollViewContainer: {
    flex: 1,
    paddingBottom: 16
  },
  itemContainer: {
    width: 160,
    paddingRight: 16
  },
  itemMarker: {
    width: 40,
    height: 3,
    backgroundColor: colors.gray200,
    marginBottom: 8
  },
  itemLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24
  },
  itemText: {
    fontSize: 15,
    lineHeight: 20
  }
})

export { Shelf, ShelfItem }
