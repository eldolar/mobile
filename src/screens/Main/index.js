import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect  } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import Bank from "../../components/Bank";
import BankList from "../../components/BankList";
import { HeaderMain } from "../../components/Header";
import { FooterAbout } from "../../components/Footer";
import Layout from "../../layout";
import styles from './styles';

class Main extends Component {
  componentDidMount() {
    this.props.getExchanges()
  }

  render (){
    return (
      <Layout>
      <HeaderMain lastUpdate={this.props.updatedAt} refresh={this.props.getExchanges} navigation={this.props.navigation}/>
      <BankList refresh={this.props.getExchanges} loading={this.props.loading} banks={this.props.exchanges}/>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  exchanges: state.banks.exchanges,
  loading: state.banks.loading,
  updatedAt: state.banks.updatedAt,
})

const mapDispatchToProps = dispatch => ({
  getExchanges: () => dispatch({ type: 'GET_EXCHANGES' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

