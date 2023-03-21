import { NavigationContainer } from '@react-navigation/native';
import AudioProvider from './app/context/AudioProvider';
import AudiooProvider from './app/context/AudiooProvider';
import { View } from 'react-native';
import AppNavigator from "./app/navigation/AppNavigator";
import React from 'react'
import AudioList from './app/screens/AudioList';
import AudioListItem from './app/components/AudioListItem';

export default function App() {

  return (

      <AudioProvider>

          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
          
      </AudioProvider>
  
 )



}


