import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';

const Categories = ({navigation}) => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    let res = await fetch('https://fakestoreapi.com/products/categories');
    let response = await res.json();
    console.log('RESPONSE:', response);
    if (response) {
      setIsLoading(false);
      setCategories(response);
    }
  };
  const handlePress = item => {
    navigation.navigate('CategoryProducts', {
      item: item,
    });
  };

  return (
    <View>
      <Header title={'Categories'} noBack />
      {isLoading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <View style={styles.contentWrapper}>
              <CategoryCard title={item} onPress={() => handlePress(item)} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 10,
  },
});

export default Categories;
