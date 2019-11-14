import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function TimestampScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
              <Ionicons name="ios-log-in" size={40} color="white" />
                <Text style={styles.buttonText}>IN</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
              <Ionicons name="ios-log-out" size={40} color="white" />
                <Text style={styles.buttonText}>OUT</Text>
              </View>
              </TouchableOpacity>
    </ScrollView>
  );
}

TimestampScreen.navigationOptions = {
  title: 'Timestamp',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
    minHeight: '20%' ,
    backgroundColor: "#D3D3D3",
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginHorizontal: 100,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 40,
  }
});
