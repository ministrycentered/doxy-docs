import React, { Component } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import colors from './colors'
import { DoxySpinner } from './spinner'

class DoxyImage extends Component {
  state = {
    loading: true,
    fadeAnim: new Animated.Value(0)
  }

  render() {
    const imageStyles = StyleSheet.flatten(this.props.style)
    const { width = '100%', height = '100%', borderRadius = 0 } = imageStyles

    return (
      <View style={[styles.container]}>
        <Animated.Image
          style={[
            styles.image,
            imageStyles,
            {
              opacity: this.state.fadeAnim
            }
          ]}
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
            <DoxySpinner style={{ width: width, height: height }} size={30} />
          </View>
        )}
      </View>
    )
  }

  _onLoad() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 300
    }).start(() => {
      this.setState({
        loading: false
      })
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
    opacity: 0
    // zIndex: 1
  }
})

export { DoxyImage }
