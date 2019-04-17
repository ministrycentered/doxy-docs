import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import colors from './colors'
import { Avatar } from './avatar'
import { DoxyButton } from './buttons'
import { DoxyIcon } from './icon'
import { Heading, LinkedHeading, PlainText, SecondaryText, Footnote } from './typography'

class Row extends Component {
  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress} hitSlop={this.props.hitSlop}>
          {this.renderContent()}
        </TouchableOpacity>
      )
    } else {
      return <View>{this.renderContent()}</View>
    }
  }
  renderContent() {
    const imageSize = this.props.imageSize ? this.props.imageSize : 56
    return (
      <View
        style={[
          styles.row,
          { alignItems: this.props.description ? 'flex-start' : 'center' },
          this.props.menuItem ? styles.menuItem : null,
          this.props.style
        ]}
      >
        {(this.props.avatar || this.props.avatarText) && (
          <Avatar
            image={this.props.avatar}
            text={this.props.avatarText}
            size={imageSize}
            style={[styles.image, this.props.imageStyle]}
            textStyle={[styles.avatarText, this.props.graphicTextStyle]}
          />
        )}
        {(this.props.graphic || this.props.icon) && (
          <View
            style={[
              { height: imageSize, width: imageSize },
              styles.image,
              styles.graphic,
              this.props.imageStyle,
              this.props.menuItem ? styles.menuItemImage : null
            ]}
          >
            {this.props.icon && (
              <DoxyIcon
                name={this.props.icon}
                type={this.props.iconType || 'FontAwesome'}
                style={[
                  styles.icon,
                  this.props.menuItem ? styles.menuItemIcon : null,
                  this.props.iconStyle
                ]}
              />
            )}
            {this.props.graphic && (
              <PlainText style={[styles.graphicText, styles.graphicDay]}>
                {this.props.graphic.day}
              </PlainText>
            )}
            {this.props.graphic && (
              <PlainText style={[styles.graphicText, styles.graphicMonth]}>
                {this.props.graphic.month}
              </PlainText>
            )}
          </View>
        )}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <PlainText
              style={[
                styles.title,
                this.props.onPress ? { color: colors.turquoise } : null,
                this.props.menuItem ? styles.menuTitle : null,
                this.props.titleStyle
              ]}
            >
              {this.props.title}
            </PlainText>
            {this.props.titleRight}
          </View>
          {this.props.subtitle && (
            <Footnote style={styles.subtitle}>{this.props.subtitle}</Footnote>
          )}
          {this.props.description && (
            <SecondaryText
              style={[styles.description, this.props.menuItem ? styles.menuItemDescription : null]}
            >
              {this.props.description}
            </SecondaryText>
          )}
        </View>
      </View>
    )
  }
}

class RowGroup extends Component {
  render() {
    return (
      <View style={[this.props.style, this.props.menu ? styles.menu : null]}>
        <View style={[styles.rowGroupTitle]}>
          {this.props.title && !this.props.onTitlePress && (
            <Heading level={3}>{this.props.title}</Heading>
          )}
          {this.props.title && this.props.onTitlePress && (
            <LinkedHeading level={3} onPress={this.props.onTitlePress}>
              {this.props.title}
            </LinkedHeading>
          )}
          {this.props.buttonText && (
            <DoxyButton
              minor
              secondary
              adjustsFontSizeToFit={true}
              text={this.props.buttonText}
              onPress={this.props.onPress}
              hitSlop={this.props.hitSlop}
            />
          )}
        </View>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },

  image: {
    marginRight: 16
  },
  graphic: {
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },

  avatarText: {
    color: colors.gray300,
    fontSize: 22,
    lineHeight: 24
  },

  graphicText: {
    color: colors.gray600
  },
  graphicDay: {
    fontSize: 22,
    lineHeight: 24
  },
  graphicMonth: {
    fontSize: 12,
    lineHeight: 14
  },

  icon: {
    color: colors.gray300,
    fontSize: 32
  },
  title: {
    fontWeight: '700'
  },
  subtitle: {
    marginTop: 2
  },
  description: {
    marginTop: 4
  },

  menu: {
    marginRight: -20
  },
  menuItem: {
    paddingRight: 60
  },

  menuTitle: {
    fontWeight: '400',
    color: colors.gray800
  },
  menuItemDescription: {
    color: colors.gray500
  },
  menuItemImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    padding: 0,
    paddingRight: 10,
    width: 'auto',
    height: 'auto',
    marginRight: 0,
    backgroundColor: 'transparent'
  },

  menuItemIcon: {
    fontSize: 20
  },

  rowGroupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
})

export { Row, RowGroup }
