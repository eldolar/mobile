import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import Bank from "../Bank";
import PropTypes from 'prop-types';

const BankList = ({banks, refresh, loading}) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl
        refreshing={loading}
        onRefresh={refresh}
      />
    }>
    { banks.map((bank, index) => <Bank key={index} name={bank.name} sell={bank.sell} buy={bank.buy}/> )}
  </ScrollView>
)

export default BankList

BankList.defaultProps = {
  loading: false,
  refresh: () => {},
  banks: [],
};

BankList.propTypes = {
  loading: PropTypes.bool,
  refresh: PropTypes.func,
  banks: PropTypes.array
};
