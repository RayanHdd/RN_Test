import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Entypo } from '@expo/vector-icons';

import appTheme from '../context-store/themeContext';

// redux hooks
import { useSelector, useDispatch } from 'react-redux';
// actions
import { switchMode } from '../redux-store/actions';

const NewsCard = (props) => {
	// const theme = useContext(appTheme);

	// get the current theme
	const theme = useSelector((state) => state.theme);
	// initialize action dispatcher
	const dispatch = useDispatch();
	// define a component mode state
	const [mode, setMode] = useState(theme.mode);

	// Handle changing the theme mode
	const handleThemeChange = () => {
		dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
	};

	// Update the app Incase the theme mode changes
	useEffect(() => {
		setMode(theme.mode);
	}, [theme]);

	const rightSwipe = (progress, dragX) => {
		const scale = dragX.interpolate({
			inputRange: [0, 100],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		});
		return (
			<TouchableOpacity activeOpacity={0.6}>
				<View style={styles.addToFavBox}>
					<Animated.View style={{ transform: [{ scale: scale }], color: 'white' }}>
						<Entypo name="heart" size={30} color="white" />
					</Animated.View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<Swipeable renderLeftActions={rightSwipe}>
			<View
				style={[
					styles.newsItem,
					{
						// borderBottomColor: theme === 'light' ? '#ccc' : 'lightslategrey',
					},
				]}
			>
				{props.data.urlToImage ? (
					<Image
						style={styles.newsImage}
						source={{ uri: props.data.urlToImage }}
						PlaceholderContent={<ActivityIndicator />}
					></Image>
				) : (
					<Text></Text>
				)}
				<View style={styles.newsContent}>
					<Text
						style={[
							styles.newsTitle,
							{
								// color: theme === 'light' ? 'black' : 'white',
								color: mode === 'light' ? 'black' : 'white',
							},
						]}
					>
						{props.data.title}
					</Text>
					<Text
						style={[
							styles.newsAuthor,
							{
								// color: theme === 'light' ? 'black' : 'gray',
								color: mode === 'light' ? 'black' : 'gray',
							},
						]}
					>
						{props.data.author}
					</Text>
				</View>
			</View>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	newsItem: {
		borderBottomWidth: 1,
		padding: 10,
		display: 'flex',
		flexDirection: 'row',
	},
	newsImage: {
		width: 75,
		height: 75,
		marginRight: 10,
	},
	newsContent: {
		flex: 1,
	},
	newsTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	addToFavBox: {
		backgroundColor: 'tomato',
		justifyContent: 'center',
		alignItems: 'center',
		width: 90,
		height: 75,
		marginTop: 10,
		marginRight: -10,
	},
});

export default NewsCard;
