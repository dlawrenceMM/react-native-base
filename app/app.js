/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React, { useState } from "react";
import { Provider } from 'react-redux';

import LanguageProvider from 'containers/LanguageProvider';

import configureStore from './configureStore';
import { translationMessages } from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Circle } from 'react-native-svg';
import { Switch, Image } from 'react-native';


import Home from './containers/Home';
import Native from './containers/Native';
import Tickets from './containers/Tickets';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);
const Tab = createBottomTabNavigator();


function AppRoot() {
  const ref = React.useRef(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <NavigationContainer ref={ref}>
          <Tab.Navigator>

            <Tab.Screen
              name="Home"
              options={{
                headerStyle: {
                  backgroundColor: '#bf4314',
                },
                headerRight: () => (
                  <Switch
                    trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
                    thumbColor={isEnabled ? "#000000" : "#ffffff"}
                    ios_backgroundColor="#3e3e3e"
                    style={{ marginRight: 5 }}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                ),
                headerTitle: () => (
                  <Image
                    style={{ width: 150, height: 50 }}
                    source={{ uri: 'https://grandcanyonwest.com/wp-content/uploads/GCW_Logo_white.png' }}
                  />
                ),
                tabBarIcon: ({ color }) => (
                  <Svg viewBox="0 0 100 100">
                    <Circle fill={color} cx="50" cy="50" r="50" />
                  </Svg>
                )
              }} >
              {() => <Home showSideBar={isEnabled} />}
            </Tab.Screen>

            <Tab.Screen
              name="Hualapai"
              component={Native}
              options={{
                headerStyle: {
                  backgroundColor: '#bf4314',
                },
                headerTitle: () => (
                  <Image
                    style={{ width: 150, height: 50 }}
                    source={{ uri: 'https://grandcanyonwest.com/wp-content/uploads/GCW_Logo_white.png' }}
                  />
                ),
                tabBarIcon: ({ color }) => (
                  <Svg viewBox="0 0 100 100">
                    <Circle fill={color} cx="50" cy="50" r="50" />
                  </Svg>
                )
              }} />

            <Tab.Screen
              name="Tickets"
              component={Tickets}
              options={{
                headerStyle: {
                  backgroundColor: '#bf4314',
                },
                headerTitle: () => (
                  <Image
                    style={{ width: 150, height: 50 }}
                    source={{ uri: 'https://grandcanyonwest.com/wp-content/uploads/GCW_Logo_white.png' }}
                  />
                ),
                tabBarIcon: ({ color }) => (
                  <Svg viewBox="0 0 100 100">
                    <Circle fill={color} cx="50" cy="50" r="50" />
                  </Svg>
                )
              }} />
          </Tab.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </Provider>
  );
}

export default AppRoot;
