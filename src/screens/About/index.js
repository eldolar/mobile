import React, { Component } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import { HeaderGoBack } from "../../components/Header";
import AppDescription from "../../components/AppDescription";
import { FooterAbout } from "../../components/Footer";
import Layout from "../../layout";

class About extends Component {
  render() {
    return (
      <Layout>
        <HeaderGoBack navigation={this.props.navigation}/>
        <AppDescription/>
        <FooterAbout navigation={this.props.navigation}/>
      </Layout>
    )
  }
}

export default About;
