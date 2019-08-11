import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Bank = ({ name, sell, buy }) => (
  <View style={[styles.box, !hasExchange(sell, buy) && styles.noData]} >
    <Text style={styles.name}>{name}</Text>
    <View style={styles.exchangeContainer}>
      <View style={styles.exchange}>
        <Text>Venta</Text>
        <Text>{sell}</Text>
      </View>
      <View style={styles.exchange}>
        <Text>Compra</Text>
        <Text>{buy}</Text>
      </View>
    </View>
  </View>
);

const hasExchange = (sell, buy) => {
  const noExchnage = (sell == '0' || buy == '0') ||
    (sell == '' || buy == '') || (isNaN(sell) || isNaN(buy))

    if (noExchnage) {
      return false;
    }
  return true;
}

Bank.defaultProps = {
  name: 'No Data',
  sell: 'PropTypes.string',
  buy: ''
};


Bank.propTypes = {
  name: PropTypes.string.isRequired,
  sell: PropTypes.string,
  buy: PropTypes.string
}

export default Bank