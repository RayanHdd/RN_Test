import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Constants from 'expo-constants';
import { Platform, ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import NewsCard from '../components/NewsCard';
import CarouselCard from '../components/CarouselCard';
import { create } from 'apisauce';

import appTheme from '../context-store/themeContext';

// redux hooks
import { useSelector, useDispatch } from 'react-redux';
// actions
import { switchMode } from '../redux-store/actions';

const NewsScreen = ({ navigation }) => {
	// const theme = useContext(appTheme);
	const [news, setNews] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=62cb43128bf34a019ea46fc9a9e42289')
	// 		.then((res) => {
	// 			setNews(res.data.articles);
	// 		});
	// }, []);
	useEffect(() => {
		// define the api
		const api = create({ baseURL: 'https://newsapi.org/v2', timeout: 20000 });
		// start making calls
		api
			.get('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=62cb43128bf34a019ea46fc9a9e42289')
			.then((res) => {
				setNews(res.data.articles);
			});
	}, []);

	// useEffect(() => {
	// 	// set theme for status bar
	// 	theme === 'light' ? StatusBar.setBarStyle('dark-content') : StatusBar.setBarStyle('light-content');
	// 	theme === 'light' ? StatusBar.setBackgroundColor('white') : StatusBar.setBackgroundColor('black');
	// }, [theme]);
	useEffect(() => {
		// set theme for status bar
		mode === 'light' ? StatusBar.setBarStyle('dark-content') : StatusBar.setBarStyle('light-content');
		mode === 'light' ? StatusBar.setBackgroundColor('white') : StatusBar.setBackgroundColor('black');
	}, [theme]);

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

	return (
		<>
			<View
				style={[
					styles.container,
					{
						// backgroundColor: theme === 'light' ? null : 'black',
						backgroundColor: mode === 'light' ? null : 'black',
					},
				]}
			>
				<CarouselCard data={news} />
				<ScrollView style={{ marginTop: 10 }}>
					{news.map((items, Id) => (
						<NewsCard key={Id} data={items} />
					))}
				</ScrollView>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'ios' ? 28 : Constants.statusBarHeight,
		paddingTop: 10,
	},
});

export default NewsScreen;
