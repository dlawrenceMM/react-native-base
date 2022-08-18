/**
 *
 * Homepage
 *
 */

import React from 'react';
import { Text, View, SafeAreaView, Button, Image, Linking, ScrollView, Dimensions } from 'react-native';
import { styles } from './styles';

import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('sk.eyJ1IjoiYXBpLWFjdmIiLCJhIjoiY2w2eWNtZzlsMTF2MDNrcGc1MndyNzZqZyJ9.TT1O9-LuWgD-3G9US3Azmg');
const defaultStyle = {
  version: 8,
  name: 'Land',
  sources: {
    map: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      minzoom: 1,
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#f2efea',
      },
    },
    {
      id: 'map',
      type: 'raster',
      source: 'map',
      paint: {
        'raster-fade-duration': 100,
      },
    },
  ],
};


export function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={{ minHeight: Dimensions.get('window').height }}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} styleJSON={JSON.stringify(defaultStyle)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
