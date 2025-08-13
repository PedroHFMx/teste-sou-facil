import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomersScreen from './CustomersScreen';
import SalesScreen from './SalesScreen';
import ReceiptsScreen from './ReceiptsScreen';
import UsersScreen from './UsersScreen';
import Navbar from '../../components/Navbar';

type TabParamList = {
  Customers: undefined;
  Sales: undefined;
  Receipts: undefined;
  Users: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function NavIndex() {
  return (
    <SafeAreaView className="flex-1">
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => <Navbar {...props} />}
      >
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="Sales" component={SalesScreen} />
        <Tab.Screen name="Receipts" component={ReceiptsScreen} />
        <Tab.Screen name="Users" component={UsersScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
