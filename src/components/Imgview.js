import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
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
        <TouchableOpacity style={styles.card}>
          <Image style={styles.userImage} source={{ uri: itemId }} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Imgview;

