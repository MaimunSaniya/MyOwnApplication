import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import MyHeader from '../components/Header'

export default class Consult extends Component {
  render(){
    return(
      <View>
      <MyHeader navigation={this.props.navigation} title="Consultation" />
      <Text>Consult</Text>
      </View>
    )
  }
}