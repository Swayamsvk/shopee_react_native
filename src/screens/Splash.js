import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>ShopeeHub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 50,
    color: '#FFFFFF',
    //fontWeight: '800',
    fontFamily: 'Poppins-Bold',
  },
});

export default Splash;
