import { Platform } from 'react-native'

const UNITS = new Set([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8])

const space = value => {
  return UNITS.has(value) ? value * 8 : 0
}

const platformMargin = () =>
  Platform.select({
    ios: 20,
    android: 16,
    web: 20
  })

export { space, platformMargin }
