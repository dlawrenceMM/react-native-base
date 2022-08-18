/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import { Provider } from 'react-redux';

import LanguageProvider from 'containers/LanguageProvider';

import configureStore from './configureStore';
import { translationMessages } from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './containers/Home';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

function AppRoot() {
  const ref = React.useRef(null);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <NavigationContainer ref={ref}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </Provider>
  );
}

export default AppRoot;
