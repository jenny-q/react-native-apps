import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={10} />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={9} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={8.7} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;