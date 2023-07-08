import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const CategoryProducts = ({route, navigation}) => {
  const [products, setProducts] = useState(null);
  const [headTitle, setHeadTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const {item} = route.params;

    getProducts(item);
  }, []);

  const getProducts = async item => {
    setIsLoading(true);
    console.log('ITEM:', item);
    setHeadTitle(item);
    let res = await fetch(`https://fakestoreapi.com/products/category/${item}`);
    console.log('RES:', res);
    let response = await res.json();
    console.log('RESPONSE:', response);
    if (response) {
      setIsLoading(false);
      setProducts(response);
    }
  };
  const onPressProductCard = id => {
    navigation.navigate('ProductDetails', {id: id});
  };

  return (
    <View>
      <Header
        title={headTitle?.charAt(0).toUpperCase() + headTitle?.slice(1)}
        navigation={navigation}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <View style={styles.cardContainerWrapper}>
          <FlatList
            data={products}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <ProductCard
                  image={item.image}
                  name={item.title}
                  description={item.description}
                  price={item.price}
                  onPress={() => onPressProductCard(item.id)}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerWrapper: {
    padding: 10,
  },
  cardContainer: {
    paddingVertical: 10,
  },
});

export default CategoryProducts;
