import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Products from '../screens/Products';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Categories from '../screens/Categories';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabelStyle: {fontFamily: 'Poppins-Bold'},
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" color={'black'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabelStyle: {fontFamily: 'Poppins-Bold'},
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-bag" color={'black'} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabelStyle: {fontFamily: 'Poppins-Bold'},
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <Icon name="category" color={'black'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
