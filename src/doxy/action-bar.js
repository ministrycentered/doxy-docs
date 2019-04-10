import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import isIphoneX from '../shared/iphonex'

import colors from './colors'
import { Badge } from './badge'
import { DoxyButton } from './buttons'
import { Footnote } from './typography'
import { space, platformMargin } from './grid'

class ActionBar extends Component {
  render() {
    return (
      <View style={[styles.actionBar, this.props.barStyles]}>
        <View
          style={[styles.messageWrapper, this.props.buttonText ? styles.wrapperHasButton : null]}
        >
          {this.props.message && (
            <Footnote style={this.props.messageStyle}>{this.props.message}</Footnote>
          )}

          {this.props.infoText && (
            <Footnote style={this.props.infoTextStyle}>{this.props.infoText}</Footnote>
          )}
        </View>
        <View>
          {this.props.buttonText && (
            <DoxyButton text={this.props.buttonText} disabled={this.props.disabled} onPress={this.props.buttonOnPress} />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray25,
    paddingVertical: space(2),
    paddingHorizontal: platformMargin(),
    paddingBottom: isIphoneX() ? 34 : 16,
    width: '100%'
  },
  messageWrapper: {
    flexShrink: 1
  },
  wrapperHasButton: {
    paddingRight: space(1.5)
  }
})

export { ActionBar }
