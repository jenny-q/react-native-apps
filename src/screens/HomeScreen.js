import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
  	<View>
  	<Text style={styles.text}>Hi!</Text>
	<Button
		onPress={() => navigation.navigate('Components') }
		title="Go to Components Demo"
	/>
	<Button
		onPress={() => navigation.navigate('Image') }
		title="Go to Images"
	/>
	<Button
		onPress={() => navigation.navigate('Counter') }
		title="Go to Counter"
	/>
	</View>
	);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
