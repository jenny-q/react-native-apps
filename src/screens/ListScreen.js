import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
	const friends = [
		{name: 'friend 1', age: '1'},
		{name: 'friend 2', age: '2'},
		{name: 'friend 3', age: '3'},
		{name: 'friend 4', age: '4'},
		{name: 'friend 5', age: '5'}
	];
	return (
		<FlatList
		keyExtractor= {friend => friend.name}
		data={friends} 
		renderItem={({item}) => {
			return (
			<Text style={styles.textStyle}>
				{item.name} - Age {item.age}
			</Text>
			);
		}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default ListScreen;