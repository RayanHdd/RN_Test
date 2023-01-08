import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import LottieView from 'lottie-react-native';
import { Provider } from 'react-redux';
import configureStore from './redux-store/store';

// Initialize the store
const store = configureStore();

export default function App() {
	const [splashShown, setSplashShown] = useState(true);

	setTimeout(() => {
		setSplashShown(false);
	}, 2200);

	return (
		<Provider store={store}>
			{splashShown && (
				<LottieView
					source={require('./assets/animations/splash.json')}
					loop={false}
					autoPlay
					style={{
						alignSelf: 'center',
						justifyContent: 'center',
						width: '40%',
						height: '70%',
					}}
				/>
			)}
			{!splashShown && (
				<NavigationContainer>
					<DrawerNavigator />
				</NavigationContainer>
			)}
		</Provider>
	);
}
