import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import styles from '../styles/Imgview.styles'

class Imgview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    const { itemId } = this.props.route.params;
    return (
      <View style={styles.container}>
          <Image style={styles.userImage} source={{ uri: itemId }} />
      </View>
    );
  }
}

export default Imgview;

