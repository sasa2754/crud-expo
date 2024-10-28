import { Tabs } from 'expo-router';
import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function TabLayout() {

  const styles = StyleSheet.create({

  });

  return (
    <>
      <Tabs>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>❤</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='explore' options={{headerShown: false, tabBarIcon: () => (<Text>❤</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>❤</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}