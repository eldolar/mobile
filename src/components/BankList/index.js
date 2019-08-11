import React from 'react';
import { View, ScrollView } from 'react-native';
import Bank from "../Bank";

const BankList = ({banks}) => (
  <ScrollView>
    { banks.map(bank => <Bank name={bank.name} sell={bank.sell} buy={bank.buy}/> )}
  </ScrollView>
)


export default BankList

