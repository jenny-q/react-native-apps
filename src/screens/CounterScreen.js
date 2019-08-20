import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
     //state, function
	const [counter, setCounter] = useState(0);
	return (
  	<View>
		  <Button title="Increase" onPress={() => {
			//never modify the state directly, use function like so: 
			setCounter(counter + 1);
		}} />
		  <Button title="Decrease" onPress={() => {
			setCounter(counter - 1);
		}} />
          <Text>Counter: {counter}</Text>
	</View>
	);
};

const styles = StyleSheet.create({

});

export default CounterScreen;