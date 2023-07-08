import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';

const ProductDetails = ({navigation, route}) => {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    imageStyle,
    contentWrapper,
    textWrapper,
    titleTextStyle,
    contentTextStyle,
    headerTextStyle,
    mainTextContainer,
    imageContainer,
  } = styles;
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setIsLoading(true);
    const {id} = route.params;
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let response = await res.json();
    console.log('RESPONSE:', response);
    if (response) {
      setIsLoading(false);
      setProductDetails(response);
    }
  };

  return (
    <View>
      <Header title={'Product'} navigation={navigation} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <ScrollView contentContainerStyle={contentWrapper}>
          <View style={imageContainer}>
            <Image
              source={{
                uri: productDetails?.image,
              }}
              style={imageStyle}
            />
          </View>
          <View style={mainTextContainer}>
            <Text style={headerTextStyle}>{productDetails?.title}</Text>
            <View style={textWrapper}>
              <Text style={titleTextStyle}>Price: </Text>
              <Text style={contentTextStyle}>{productDetails?.price}</Text>
            </View>
            <View style={textWrapper}>
              <Text style={titleTextStyle}>Category: </Text>
              <Text style={contentTextStyle}>{productDetails?.category}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {height: 400, width: 300},
  contentWrapper: {
    marginTop: 50,
    flexGrow: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    //marginTop: 10,
    //paddingVertical: 5,
    flexDirection: 'row',
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 800,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
  titleTextStyle: {
    fontSize: 16,
    color: '#656565',
    fontWeight: 400,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
  mainTextContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  contentTextStyle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 600,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
});

export default ProductDetails;
