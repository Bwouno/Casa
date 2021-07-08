import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
	apiKey: 'AIzaSyBcDhLdeTfBn2AlXKkbBK_CKKWrus1tHtw',
	authDomain: 'casa-dd24c.firebaseapp.com',
	projectId: 'casa-dd24c',
	storageBucket: 'casa-dd24c.appspot.com',
	messagingSenderId: '374475408247',
	appId: '1:374475408247:web:c8225d86c01287ea341772',
	measurementId: 'G-9XSLWYMHKT'
};

firebase.initializeApp(firebaseConfig);

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import MainScreen from './components/Main';

const Stack = createStackNavigator();

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				this.setState({
					loggedIn: false,
					loaded: true
				});
			} else {
				this.setState({
					loggedIn: true,
					loaded: true
				});
			}
		});
	}
	render() {
		const { loggedIn, loaded } = this.state;
		if (!loaded) {
			return (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text>Loading</Text>
				</View>
			);
		}
		if (!loggedIn) {
			return (
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Landing">
						<Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
						<Stack.Screen name="Register" component={RegisterScreen} />
						<Stack.Screen name="Login" component={LoginScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			);
		}
		return (
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Main">
						<Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}

export default App;
