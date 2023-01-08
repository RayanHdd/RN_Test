import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>No New Notifications!</Text>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
};

const styles = StyleSheet.create({});

export default NotificationsScreen;
