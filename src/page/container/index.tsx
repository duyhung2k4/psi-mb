import React from "react";
import { View } from "react-native";
import { styles } from "./styled";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./content/home";
import Learn from "./content/learn";
import Posts from "./content/posts";
import Account from "./content/account";

import Icon from "../../components/Icon";

const Tab = createBottomTabNavigator();
const Container: React.FC = () => {

  return (
    <View style={styles.root}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen 
          name="HOME" 
          component={Home}
          options={{
            tabBarIcon: () => <Icon name="home" color={"red"} size={24} />
          }}
        />
        <Tab.Screen 
          name="POSTS" 
          component={Posts} 
          options={{
            tabBarIcon: () => <Icon name="post" color={"red"} size={24} />
          }}
        />
        <Tab.Screen 
          name="LEARN" 
          component={Learn} 
          options={{
            tabBarIcon: () => <Icon name="lead-pencil" color={"red"} size={24} />
          }}
        />
        <Tab.Screen 
          name="ACCOUNT" 
          component={Account} 
          options={{
            tabBarIcon: () => <Icon name="account" color={"red"} size={24} />
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default Container;