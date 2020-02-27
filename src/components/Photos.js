import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import GLOBALS from '../constants/Constants'
import styles from '../styles/Photos.styles'

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };

  }

  componentDidMount = () => {
    fetch(GLOBALS.PHOTOS_URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.filter(
          d => d.albumId === this.props.route.params.itemId
        );
        this.setState({
          data: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { itemId } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Imgview', {
                  itemId: item.thumbnailUrl,
                });
              }}>
                <Image
                  style={styles.userImage}
                  source={{ uri: item.thumbnailUrl }}
                />
                <View style={styles.cardFooter}>
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>AlbumId: {JSON.stringify(itemId)}</Text>
                    <Text numberOfLines={1} style={{ width: 100 }}>
                      {item.title}
                    </Text>
                  </View>
                </View>

              </TouchableOpacity>

            );
          }}
        />
      </View>
    );
  }
}

export default Photos;


