import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import User from './src/screens/users/user';
import AddUser from './src/screens/addUserPage/addUser';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
<Provider store={store}>
<NavigationContainer>
   <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Adduser" component={AddUser} />
    </Tab.Navigator>
  </NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
