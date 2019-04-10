import React from 'react'
import { LayoutAnimation, View } from 'react-native'

import { PlainText } from './typography'
import { TextLink } from './buttons'

const maxText = 120
const maxBuffer = 30

class ExpandingText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  render() {
    const fullText = this.props.children ? this.props.children : ''
    const simpleString = fullText.replace(/\n|\r/g, ' ')
    const expandable = simpleString.length > maxText + maxBuffer
    const truncatedText = expandable ? `${simpleString.substring(0, maxText)}... ` : simpleString
    const onPressHandler = expandable ? this.onPress.bind(this) : null

    return (
      <View style={this.props.style}>
        <PlainText onPress={onPressHandler}>
          {this.state.expanded ? this.props.children : truncatedText}
          {!this.state.expanded && expandable && <TextLink>Read more</TextLink>}
          {this.state.expanded && expandable && <TextLink> Read less</TextLink>}
        </PlainText>
      </View>
    )
  }

  // Android crashes if numberOfLines is set to -1. We're limiting the number of characters
  // for the description, so we shouldn't ever need more than half a dozen lines.
  // But for now, we're just using a giant number to accommodate a super long description.
  onPress() {
    LayoutAnimation.easeInEaseOut()
    if (this.state.expanded) {
      this.setState({ expanded: false })
    } else {
      this.setState({ expanded: true })
    }
  }
}

export { ExpandingText }
