import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackRoute, TRootStack} from '../../../logic/navigation/Interfaces';

export type TNavigation = StackNavigationProp<TRootStack, RootStackRoute.home>;
