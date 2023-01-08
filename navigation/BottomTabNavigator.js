import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import NewsScreen from '../screens/NewsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'News') {
						iconName = 'news';
					} else if (route.name === 'Favorites') {
						iconName = focused ? 'heart' : 'heart-outlined';
					}
					return <Entypo name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
				headerShown: false,
			})}
		>
			<Tab.Screen name="News" component={NewsScreen} />
			<Tab.Screen name="Favorites" component={FavoritesScreen} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
