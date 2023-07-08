import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductCard = ({image, name, description, price, onPress}) => {
  console.log(image, 'this is image');
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
        style={{height: 300, borderRadius: 10}}
      />
      <View style={styles.textContainerStyle}>
        <Text style={[styles.mainTitleStyle]}>{name}</Text>
        <Text style={styles.descriptionStyle}>{description}</Text>
        <Text style={styles.priceStyle}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
  },
  textContainerStyle: {
    //paddingVertical: 5,
  },
  mainTitleStyle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 400,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
  descriptionStyle: {
    fontSize: 14,
    color: '#DFDFDF',
    fontWeight: 200,
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  priceStyle: {
    fontSize: 14,
    fontWeight: 400,
    color: '#FFFFFF',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ProductCard;
