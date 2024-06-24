import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackRoute, TRootStack} from '../../../logic/navigation/Interfaces';
import {RouteProp} from '@react-navigation/native';

export type TNavigation = StackNavigationProp<
  TRootStack,
  RootStackRoute.details
>;

export type TRoute = RouteProp<TRootStack, RootStackRoute.details>;
