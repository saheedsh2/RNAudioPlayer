import { NavigationContainer } from '@react-navigation/native';
import AudioProvider from './app/context/AudioProvider';
import AudiooProvider from './app/context/AudiooProvider';

import AppNavigator from "./app/navigation/AppNavigator";
import React from 'react'

export default function App() {

  return (

      <AudioProvider>

          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
          
      </AudioProvider>
  
 )
}


