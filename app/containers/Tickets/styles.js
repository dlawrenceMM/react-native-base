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
  }
});
