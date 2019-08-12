import React from 'react';
import { View, Linking } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import config from '../../../config'
import PropTypes from 'prop-types';

const FooterAbout = ({navigation}) => (
  <View elevation={5} style={styles.footerContainer}>
    <View style={styles.iconContainer}>
      <Icon
        name="logo-github"
        color="white"
        size={35}
        style={styles.icon}
        onPress={() => Linking.openURL(config.githubUrl)}
      />
      <Icon
        name="logo-instagram"
        color="white"
        size={35}
        style={styles.icon}
        onPress={() => Linking.openURL(config.instagramUrl)}
      />
    </View>
  </View>
)

export default FooterAbout;

FooterAbout.defaultProps = {
  navigation: {},
};

FooterAbout.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};
