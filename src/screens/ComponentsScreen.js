import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
 const name = 'Jennifer';
  return (
  <View>
  <Text style={styles.textStyle}>learning react</Text>
  <Text style={styles.nameStyle}>my name is {name}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	},
	nameStyle: {
		fontSize: 14
	}
});

export default ComponentsScreen;