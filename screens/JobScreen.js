import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function JobScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          Today
        </Text>
      </View>
      
    </ScrollView>
  );
}

JobScreen.navigationOptions = {
  title: 'Job',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
