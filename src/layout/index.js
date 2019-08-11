import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Layout = (props) => (
  <LinearGradient
    colors={['#b392c7', '#7c58ad']}
    locations={[0, 1]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    { props.children }
  </LinearGradient>
)

export default Layout;