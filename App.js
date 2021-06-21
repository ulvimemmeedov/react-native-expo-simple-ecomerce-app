import * as React from 'react';
import { NavigationContainer,na } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import PayScreen from './screens/Pay';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ana Səhifə" component={Home} />
        <Stack.Screen name="Ödəniş et" component={PayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;