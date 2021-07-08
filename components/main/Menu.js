import React from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';

export default function Menu() {
	const onLogout = () => {
		firebase.auth().signOut();
	};
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Menu</Text>
			<Button title="Logout" onPress={() => onLogout()} />
		</View>
	);
}
