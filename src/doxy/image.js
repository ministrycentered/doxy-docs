import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import colors from './colors'
import { DoxySpinner } from './spinner'

class DoxyImage extends Component {
  state = {
    loading: true
  }

  render() {
    const imageStyles = StyleSheet.flatten(this.props.style)
    const { width = '100%', height = '100%', borderRadius = 0 } = imageStyles
    return (
      <View style={[styles.container]}>
        <FastImage
          style={[styles.image, imageStyles]}
          resizeMode={this.props.resizeMode}
          onLoad={this._onLoad.bind(this)}
          source={this.props.source}
        />
        {this.state.loading && (
          <View
            style={[
              styles.loadingBackground,
              {
                borderRadius: borderRadius,
                width: width,
                height: height
              }
            ]}
          >
            <DoxySpinner
              style={{ width: width, height: height }}
              size={this.props.loaderSize ? this.props.loaderSize : 24}
            />
          </View>
        )}
      </View>
    )
  }

  _onLoad() {
    this.setState({
      loading: false
    })
  }
}

const styles = StyleSheet.create({
  loadingBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    // zIndex: 0,
    backgroundColor: colors.gray100
  },
  image: {
    backgroundColor: 'transparent',
    zIndex: 300
  }
})

export { DoxyImage }
