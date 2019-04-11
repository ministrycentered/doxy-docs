import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
// import FastImage from 'react-native-fast-image'

import colors from './colors'
import { PlainText } from './typography'
import { DoxyImage } from './image'

class Avatar extends Component {
  render() {
    const height = this.props.size ? this.props.size : 80
    const width = this.props.size ? this.props.size : 80
    const placeHolders = ['no_photo_thumbnail_gray.png', 'no_photo_thumbnail.svg']
    const isPlaceholderAvatar =
      this.props.image && placeHolders.indexOf(this.props.image.split('/').pop()) > -1

    if (this.props.image && !isPlaceholderAvatar) {
      return (
        <DoxyImage
          style={[
            {
              height: height,
              width: width,
              borderRadius: height / 2
            },
            this.props.style
          ]}
          loaderSize={this.props.size}
          // resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: this.props.image,
            // priority: FastImage.priority.normal
          }}
        />
      )
    } else if (this.props.fallback) {
      return this.props.fallback
    } else {
      return (
        <View
          style={[
            { height: height, width: width, borderRadius: height / 2 },
            styles.avatarInitials,
            this.props.style
          ]}
        >
          <PlainText style={[styles.initialsText, this.props.textStyle]}>
            {this.props.text}
          </PlainText>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  global: {
    fontFamily: Platform.select({
      ios: 'System',
      android: 'normal'
    })
  },
  avatarInitials: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray100
  },
  initialsText: {
    color: colors.gray300,
    fontSize: 32,
    lineHeight: 36
  }
})

export { Avatar }
