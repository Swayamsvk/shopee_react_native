import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({title, noBack, navigation}) => {
  return (
    <View
      style={[
        styles.containerStyle,
        {justifyContent: noBack ? 'center' : 'space-between'},
      ]}>
      {!noBack && (
        <Icon
          name="arrow-back"
          color={'white'}
          size={30}
          onPress={() => navigation.pop()}
        />
      )}
      <Text style={styles.textStyle}>{title}</Text>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000000',
    //justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 600,
    fontFamily: 'Poppins-Bold',
  },
});

export default Header;
