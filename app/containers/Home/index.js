/**
 *
 * Homepage
 *
 */

import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, Dimensions } from 'react-native';
import { styles, mapStyle } from './styles';

import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('sk.eyJ1IjoiYXBpLWFjdmIiLCJhIjoiY2w2eWNtZzlsMTF2MDNrcGc1MndyNzZqZyJ9.TT1O9-LuWgD-3G9US3Azmg');


export function Home(props) {

  return (
    <SafeAreaView>
      <StatusBar
        hidden={true} />
      <Text style={styles.text}>{props.showSideBar ? 'show' : 'hide'}</Text>
      <ScrollView style={{ minHeight: Dimensions.get('window').height }}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} styleJSON={JSON.stringify(mapStyle)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
