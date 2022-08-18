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
  infoTextWrapper: {
    marginVertical: 30,
    alignItems: 'center',
  },
  langWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
  localeWrapper: {
    marginTop: Platform.OS === 'android' ? 0 : -50,
    marginBottom: 20,
    alignItems: 'center',
  },
  helpWrapper: {
    marginLeft: 30,
    alignItems: 'center',
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
