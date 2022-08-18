import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  textWrapper: {
    marginTop: 50,
    marginHorizontal: 38,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    margin: 5,
    textAlign: 'center',
    color: "#000000"
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  }
});

export const mapStyle = {
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
        'background-color': '#ffffff',
      },
    },
    {
      id: 'map',
      type: 'raster',
      source: 'map',
      paint: {
        'raster-fade-duration': 100
      },
    },
  ],
};
