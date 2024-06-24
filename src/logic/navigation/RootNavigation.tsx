import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {IRootNavigation, RootStackRoute} from './Interfaces';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../ui/screens/home/HomeScreen';
import DetailsScreen from '../../ui/screens/details/DetailsScreen';

const Stack = createStackNavigator();

const RootNavigation: React.FC<IRootNavigation> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RootStackRoute.home} component={HomeScreen} />
        <Stack.Screen name={RootStackRoute.details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
