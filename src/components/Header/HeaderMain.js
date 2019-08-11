import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import PropTypes from 'prop-types';

const HeaderMain = ({lastUpdate, refresh, navigation}) => (
  <View style={styles.headerContainer}>
    <View style={styles.dates}>
      <Text style={styles.dateDescription}>ultima actualizacion</Text>
      <Text style={styles.dateUpdated}>{lastUpdate}</Text>
    </View>
    <TouchableOpacity
      style={styles.aboutButton}
      onPress={() => navigation.navigate('About')}
    >
      <Text style={styles.textAbout}>
        About
      </Text>
    </TouchableOpacity>
  </View>
)

export default HeaderMain;

HeaderMain.defaultProps = {
  lastUpdate: '',
  refresh: () => {},
  navigation: {},
};

HeaderMain.propTypes = {
  lastUpdate: PropTypes.string,
  refresh: PropTypes.func,
  navigation:  PropTypes.shape({
    navigate: {}
  })
};
