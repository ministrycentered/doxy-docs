import React, { Component } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import colors from './colors'

class DoxySpinner extends Component {
  state = {
    rotation: new Animated.Value(0)
  }

  loopAnimation() {
    this.state.rotation.setValue(0)
    Animated.sequence([
      Animated.timing(this.state.rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ]).start(() => {
      this.loopAnimation()
    })
  }

  componentDidMount() {
    this.loopAnimation()
  }

  render() {
    const rotateValue = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.spinner,
            {
              width: this.props.size,
              height: this.props.size,
              borderRadius: this.props.size / 2,
              transform: [{ rotate: rotateValue }]
            }
          ]}
        >
          <View
            style={[
              styles.notch,
              {
                width: this.props.size / 2,
                height: this.props.size / 2
              }
            ]}
          >
            <View
              style={[
                styles.circle,
                styles.circleInner,
                {
                  width: this.props.size,
                  height: this.props.size,
                  borderRadius: this.props.size / 2
                }
              ]}
            />
          </View>
          <View
            style={[
              styles.circle,
              {
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 2
              }
            ]}
          />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 200,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7
  },
  circle: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: colors.gray300
  },
  notch: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: 200
  },
  circleInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderColor: colors.gray600
  }
})

export { DoxySpinner }
