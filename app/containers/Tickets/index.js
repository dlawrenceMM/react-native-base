/**
 *
 * Native page
 *
 */

import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { styles } from './styles';

export function Tickets() {
  return (
    <SafeAreaView>
      <ScrollView style={{ minHeight: Dimensions.get('window').height }}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Tickets </Text>
            Page
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
