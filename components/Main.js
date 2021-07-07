import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import HomeScreen from './main/Home'
import FavorisScreen from './main/Favoris'
import PanierScreen from './main/Panier'
import MagasinScreen from './main/Panier'
import MenuScreen from './main/Menu'

const Tab = createBottomTabNavigator();

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }} />
          <Tab.Screen name="Favoris" component={FavorisScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }} />
          <Tab.Screen name="Panier" component={PanierScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
            }} />
          <Tab.Screen name="Magasin" component={MagasinScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map-marker" color={color} size={26} />
              ),
          }} />
          <Tab.Screen name="Menu" component={MenuScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="reorder-horizontal" color={color} size={26} />
              ),
            }} />          
        </Tab.Navigator>
      )
    }
  
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
