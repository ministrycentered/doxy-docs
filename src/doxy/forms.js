import React, { Component } from 'react'
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import colors from './colors'
import { Heading, PlainText } from './typography'
import { DoxyIcon } from './icon'

class Select extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.label &&
          this.props.labelOutside && (
            <PlainText style={[styles.secondaryLabel, this.props.labelStyle]}>
              {this.props.label}
            </PlainText>
          )}
        <TouchableOpacity onPress={this.props.onPress} style={[styles.select, this.props.style]}>
          {this.props.icon && (
            <DoxyIcon
              icon={this.props.icon}
              type={this.props.iconType}
              style={[styles.iconStyle, this.props.iconStyle]}
            />
          )}
          {this.props.image && <View style={{ marginRight: 8 }}>{this.props.image}</View>}
          {!this.props.labelOutside &&
            this.props.label && (
              <Heading level={4} style={[styles.selectLabel, this.props.labelStyle]}>
                {this.props.label}
              </Heading>
            )}
          <PlainText style={this.props.textStyle} numberOfLines={1}>
            {this.props.title}
          </PlainText>
          <DoxyIcon name="chevron-thin-down" type="Entypo" style={styles.chevron} />
        </TouchableOpacity>
      </React.Fragment>
    )
  }
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.input = null
  }

  blur() {
    this.input.blur()
  }

  focus() {
    this.input.focus()
  }

  render() {
    let type = null
    if (this.props.primary) type = styles.primaryInput
    else if (this.props.secondary) type = styles.secondaryInput
    else type = styles.basicInput

    return (
      <React.Fragment>
        {this.props.label && (
          <PlainText style={[styles.secondaryLabel, this.props.labelStyle]}>
            {this.props.label}
          </PlainText>
        )}
        <TextInput
          ref={comp => (this.input = comp)}
          style={[styles.global, type, this.props.style]}
          value={this.props.value}
          placeholder={this.props.placeholder}
          returnKeyType={this.props.returnKeyType}
          keyboardType={this.props.keyboardType}
          selectTextOnFocus={this.props.selectTextOnFocus}
          onSelectionChange={this.props.onSelectionChange}
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.onSubmitEditing}
          textContentType={this.props.textContentType}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          autoFocus={this.props.autoFocus}
          caretHidden={this.props.caretHidden}
          selection={this.props.selection}
          multiline={this.props.multiline ? this.props.multiline : false}
          autoCorrect={this.props.autoCorrect ? this.props.autoCorrect : false}
          autoCapitalize={this.props.autoCapitalize ? this.props.autoCapitalize : 'none'}
          underlineColorAndroid="transparent"
          selectionColor={this.props.selectionColor ? this.props.selectionColor : colors.topaz}
          placeholderTextColor={colors.gray300}
        />
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  global: {
    fontFamily: Platform.select({
      ios: 'System',
      android: 'normal'
    }),
    fontWeight: '400',
    fontSize: 16,
    color: colors.gray800
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderColor: colors.gray200,
    borderWidth: 1
  },
  selectLabel: {
    fontWeight: '400',
    fontSize: 12,
    marginRight: 12
  },
  chevron: {
    color: colors.gray500,
    fontSize: 14,
    paddingLeft: 16,
    marginLeft: 'auto'
  },
  primaryInput: {
    height: 44,
    backgroundColor: 'transparent',
    fontWeight: '300',
    fontSize: 25,
    textAlign: 'center',
    borderColor: colors.gray200,
    borderWidth: 1,
    borderRadius: 22,
    paddingVertical: 0
  },
  secondaryInput: {
    height: 44,
    backgroundColor: 'transparent',
    fontWeight: '300',
    fontSize: 25,
    textAlign: 'left',
    borderColor: colors.gray200,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 5
  },
  secondaryLabel: {
    fontSize: 12,
    color: colors.gray600,
    textAlign: 'left'
  },
  basicInput: {
    flex: 1,
    paddingVertical: 4
  }
})

export { Input, Select }
