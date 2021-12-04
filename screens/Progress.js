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

export default class Progress extends Component {
  render(){
    return(
      <View>
      <MyHeader title="Your Progress" navigation={this.props.navigation} />
      <Text>Progress</Text>
      </View>
    )
  }
}