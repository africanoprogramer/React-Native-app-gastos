import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*Redux*/

import {Provider} from 'react-redux';
import store from './src/store';

/* Componentes */

import HomeScreen from './src/components/HomeScreen';
import AnhadiendoTransferencias from './src/components/AnhadiendoTransferencias';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Lista de Gastos'}}
          />
          <Stack.Screen
            name="add"
            component={AnhadiendoTransferencias}
            options={{title: 'Añadir Gastos'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
