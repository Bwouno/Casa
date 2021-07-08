import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';

import firebase from 'firebase';

const image = { uri: 'https://i.imgur.com/0XvElMF.png' };
export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
		this.onSignup = this.onSignup.bind(this);
	}

	onSignup() {
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={image} resizeMode="cover" style={styles.image}>
					<Image
						style={styles.logo}
						source={{
							uri: 'https://i.imgur.com/27vhNH4.png'
						}}
					/>
					<TextInput
						style={styles.input}
						placeholder="Email"
						onChangeText={(email) => this.setState({ email })}
					/>
					<TextInput
						style={styles.input}
						placeholder="Mot de passe"
						secureTextEntry={true}
						onChangeText={(password) => this.setState({ password })}
					/>
					<View backgroundColor="#94C11F" width="50%" style={styles.containerButton}>
						<Button color="white" onPress={() => this.onSignup()} title="Se Connecter" />
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 300,
		height: 150,
		marginHorizontal: 40,
		marginVertical: 30
	},
	input: {
		width: 300,
		height: 60,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
		padding: 20,
		backgroundColor: 'white',
		borderColor: 'white',
		marginHorizontal: 50
	},
	containerButton: {
		marginHorizontal: 100,
		borderRadius: 10,
		marginTop: 30
	}
});

export default Login;
