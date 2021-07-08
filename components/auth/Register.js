import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, ImageBackground, Image } from 'react-native';

import firebase from 'firebase';

const image = { uri: 'https://i.imgur.com/0XvElMF.png' };

export class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			name: ''
		};
		this.onSignup = this.onSignup.bind(this);
	}

	onSignup() {
		const { email, password, name } = this.state;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
					name,
					email
				});
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
						placeholder="name"
						onChangeText={(name) => this.setState({ name })}
					/>
					<TextInput
						style={styles.input}
						placeholder="email"
						onChangeText={(email) => this.setState({ email })}
					/>
					<TextInput
						style={styles.input}
						placeholder="password"
						secureTextEntry={true}
						onChangeText={(password) => this.setState({ password })}
					/>
					<View backgroundColor="#94C11F" width="50%" style={styles.containerButton}>
						<Button color="white" onPress={() => this.onSignup()} title="S'inscrire" />
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
		borderRadius: 20,
		marginTop: 30
	}
});

export default Register;
