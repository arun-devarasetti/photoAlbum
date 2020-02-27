import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import GLOBALS from '../constants/Constants';
import styles from '../styles/List.styles'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount = () => {
    fetch(GLOBALS.ALBUM_URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
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
              <TouchableOpacity style={styles.card}>
                <View style={styles.cardFooter}>
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>AlbumId: {JSON.stringify(item.id)}</Text>
                    <Text numberOfLines={1} style={{ width: 100 }}>
                      {item.title}
                    </Text>

                    <TouchableOpacity
                      style={styles.followButton}
                      onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Details', {
                          itemId: item.id,
                        });
                      }}>
                      <Text style={styles.followButtonText}>View</Text>
                    </TouchableOpacity>
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

export default List;

