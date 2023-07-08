import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
//import {Ionicons} from '@expo/vector-icons';

const Login = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.loginTextStyle}>Login</Text>
          <View style={styles.inputContainerStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Username"
              placeholderTextColor="gray"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainerStyle}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainerStyle}
            onPress={() => navigation.navigate('BottomTabNavigator')}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  loginTextStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 48,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    fontFamily: 'Poppins-Regular',
  },
  iconStyle: {
    marginRight: 8,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
  },
  buttonContainerStyle: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default Login;
