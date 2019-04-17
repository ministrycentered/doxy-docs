import React, { Component } from 'react';

// import Icon from '../shared/icon'
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/dist/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import IoniconIcon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

const ARROW_RIGHT = '\u2192';
const ARROW_LEFT = '\u2190';

class DoxyIcon extends Component {
  render() {
    if (this.props.name) {
      switch (this.props.type) {
      case 'Entypo':
        return (
          <EntypoIcon
            name={this.props.name}
            size={24}
            style={this.props.style}
          />
        );
      case 'EvilIcons':
        return (
          <EvilIconsIcon
            name={this.props.name}
            size={24}
            style={this.props.style}
          />
        );
      case 'Feather':
        return (
          <FeatherIcon
            name={this.props.name}
            size={24}
            style={this.props.style}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesomeIcon
            name={this.props.name}
            size={24}
            style={this.props.style}
          />
        );
      case 'Ionicons':
        return (
          <IoniconIcon
            name={this.props.name}
            size={24}
            style={this.props.style}
          />
        );
      case 'Material':
        return (
          <MaterialIcon
            name={this.props.name}
            size={24}
            style={this.props.style}
          />
        );
      default:
        return null; //<Icon name={this.props.name} style={this.props.style} />
      }
    } else return null;
    return null;
  }
}

export { ARROW_RIGHT, ARROW_LEFT, DoxyIcon };
