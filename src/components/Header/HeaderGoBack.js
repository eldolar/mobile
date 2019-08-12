import React from 'react';
import { View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import PropTypes from 'prop-types';

const HeaderGoBack = ({navigation}) => (
  <View elevation={5} style={styles.headerContainer}>
    <Icon
      name="ios-arrow-round-back"
      color="white"
      size={35}
      style={styles.backArrow}
      onPress={() => navigation.goBack()}
    />
  </View>
)

export default HeaderGoBack;

HeaderGoBack.defaultProps = {
  navigation: {},
};

HeaderGoBack.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};
