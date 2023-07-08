import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CategoryCard = ({title, onPress}) => {
  console.log('TITLE', title);
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },

  titleStyle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 400,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
});

export default CategoryCard;
