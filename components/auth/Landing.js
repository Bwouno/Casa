import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

export default function Landing({ navigation }) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={{
					uri: 'https://i.imgur.com/27vhNH4.png'
				}}
			/>
			<View backgroundColor="white" width="50%" style={styles.containerButton}>
				<Button color="#EF8181" title="S'inscrire" onPress={() => navigation.navigate('Register')} />
			</View>
			<View backgroundColor="white" width="50%" style={styles.containerButton}>
				<Button color="#EF8181" title="Se connecter" onPress={() => navigation.navigate('Login')} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#94C11F'
	},
	logo: {
		width: 300,
		height: 150,
		marginHorizontal: 40,
		marginVertical: 30
	},
	containerButton: {
		marginHorizontal: 100,
		borderRadius: 20,
		marginTop: 30
	}
});
