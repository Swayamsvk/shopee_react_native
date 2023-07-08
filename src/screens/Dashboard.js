import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Home'} noBack />
      <View style={styles.mainContainerStyle}>
        <Text style={styles.mainTextStyle}>
          Welcome To ShopeeHub.Here we provide the latest trends at a reasonable
          price.We hope you like it....
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    borderColor: 'black',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTextStyle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: '#000000',
  },
});

export default Dashboard;
