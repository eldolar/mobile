import React, { Component } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { HeaderGoBack } from "../../components/Header";
import { FooterAbout } from "../../components/Footer";
import Layout from "../../layout";
import styles from './styles';

class About extends Component {
  render() {
    return (
      <Layout>
        <HeaderGoBack navigation={this.props.navigation}/>
        <View style={{flex: 1}}></View>
        <FooterAbout navigation={this.props.navigation}/>
      </Layout>
    )
  }
}

export default About;
