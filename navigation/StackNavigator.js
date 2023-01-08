import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsScreen from '../screens/NewsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: '#9AC4F8',
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
};

function StackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="News" component={NewsScreen} />
			<Stack.Screen name="Favorites" component={FavoritesScreen} />
		</Stack.Navigator>
	);
}

export default StackNavigator;
