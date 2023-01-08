import React, { useState, useEffect, useContext } from 'react';
import { Switch, Icon, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

// redux hooks
import { useSelector, useDispatch } from 'react-redux';
// actions
import { switchMode } from '../redux-store/actions';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import NotificationsScreen from '../screens/NotificationsScreen';
import appTheme from '../context-store/themeContext';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const [isFocused, setIsFocused] = useState(false);
	// const [theme, setTheme] = useState('light');

	// get the current theme
	const theme = useSelector((state) => state.theme);
	// initialize action dispatcher
	const dispatch = useDispatch();
	// define a component mode state
	const [mode, setMode] = useState(theme.mode);

	// Handle changing the theme mode
	const handleThemeChange = () => {
		dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
		setIsFocused(!isFocused);
	};

	// Update the app Incase the theme mode changes
	useEffect(() => {
		setMode(theme.mode);
	}, [theme]);

	return (
		// <appTheme.Provider value={theme}>
		<Drawer.Navigator
			initialRouteName="BottomTabNavigator"
			screenOptions={{ headerShown: false }}
			drawerContent={(props) => {
				return (
					// <DrawerContentScrollView {...props} style={{ backgroundColor: theme === 'light' ? 'white' : 'dimgray' }}>
					<DrawerContentScrollView {...props} style={{ backgroundColor: mode === 'light' ? 'white' : 'dimgray' }}>
						<DrawerItemList {...props} />
						<DrawerItem
							icon={() => (
								<Feather name={isFocused ? 'moon' : 'sun'} size={25} color={isFocused ? 'deepskyblue' : 'tomato'} />
							)}
							label={isFocused ? 'Dark' : 'Light'}
							// onPress={() => {
							// 	setIsFocused(!isFocused);
							// 	setTheme(theme === 'light' ? 'dark' : 'light');
							// }}
							onPress={handleThemeChange}
							// labelStyle={{ marginLeft: -18, color: theme === 'light' ? 'black' : 'white' }}
							labelStyle={{ marginLeft: -18, color: mode === 'light' ? 'black' : 'white' }}
							// activeBackgroundColor={theme === 'light' ? 'gainsboro' : 'gray'}
							activeBackgroundColor={mode === 'light' ? 'gainsboro' : 'gray'}
						/>
					</DrawerContentScrollView>
				);
			}}
		>
			<Drawer.Screen
				name="BottomTabNavigator"
				component={BottomTabNavigator}
				options={{
					title: 'News',
					// drawerActiveTintColor: theme === 'dark' ? 'white' : 'dodgerblue',
					drawerActiveTintColor: mode === 'dark' ? 'white' : 'dodgerblue',
					// drawerInactiveTintColor: theme === 'dark' ? 'white' : 'dodgerblue',
					drawerInactiveTintColor: mode === 'dark' ? 'white' : 'dodgerblue',
				}}
			/>
			<Drawer.Screen
				name="Notifications"
				component={NotificationsScreen}
				options={{
					// drawerActiveTintColor: theme === 'dark' ? 'white' : 'dodgerblue',
					drawerActiveTintColor: mode === 'dark' ? 'white' : 'dodgerblue',
					// drawerInactiveTintColor: theme === 'dark' ? 'white' : 'dodgerblue',
					drawerInactiveTintColor: mode === 'dark' ? 'white' : 'dodgerblue',
				}}
			/>
		</Drawer.Navigator>
		// </appTheme.Provider>
	);
};

const styles = StyleSheet.create({});

export default DrawerNavigator;
