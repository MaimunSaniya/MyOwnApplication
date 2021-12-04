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

export default class Workout extends Component {
  render(){
    return(
      <View>
      <MyHeader title="List of Workouts" navigation={this.props.navigation} />
      <Text>Workout</Text>
      </View>
    )
  }
}