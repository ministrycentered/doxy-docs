import { Dimensions, Platform } from 'react-native'

const isIphoneX = () => {
  if (Platform.OS === 'android') {
    return false
  }
  let d = Dimensions.get('window')
  const { height, width, scale } = d
  if (scale === 3) {
    if (height === 812 || width === 812) {
      // iPhone X
      return true
    } else if (height === 896 || width === 896) {
      // iPhone Xs Max
      return true
    }
  } else if (scale === 2) {
    if (height === 896 || width === 896) {
      // iPhone XR
      return true
    }
  }
  return false
}

export default isIphoneX
