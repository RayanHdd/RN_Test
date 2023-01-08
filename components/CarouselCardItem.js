import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);

const CarouselCardItem = ({ item, index }) => {
	return (
		<View style={styles.container} key={index}>
			<Image source={{ uri: item.urlToImage }} style={styles.image} />
			<Text style={styles.header}>{item.title && item.title.toString().substring(0, 50) + '...'}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 8,
		width: ITEM_WIDTH,
		paddingBottom: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
	},
	image: {
		width: ITEM_WIDTH,
		height: 100,
	},
	header: {
		color: '#222',
		fontSize: 14,
		fontWeight: 'bold',
		paddingLeft: 10,
		paddingTop: 10,
	},
});

export default CarouselCardItem;
