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

const Products = ({navigation}) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    const response = await fetch('https://fakestoreapi.com/products');

    const data = await response.json();
    setIsLoading(false);
    setProducts(data);
  };
  const onPressProductCard = id => {
    navigation.navigate('ProductDetails', {id: id});
  };

  return (
    <View>
      <Header title={'Products'} noBack />

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

export default Products;
