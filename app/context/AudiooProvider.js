import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import {DataProvider} from 'recyclerlistview';


export const AudioContext = createContext();

const dataProv = new DataProvider((r1, r2) => r1 !== r2);

const AudiooProvider = ({ children }) => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [permissionError, setPermissionError] = useState(false);
  const [dataprovider, setDataProvider] = useState(dataProv);

  const permissionAlert = () => {
    Alert.alert("Permission Required", "This app needs to read audio files", [
      { text: "I am ready", onPress: () => getPermission() },

      { text: "cancel", onPress: () => permissionAlert() },
    ]);
  };

  const getAudioFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    media = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
    });
    setAudioFiles({...audioFiles, dataprovider: dataprovider.cloneWithRows([
    ]), media: media.assets
    });
  };

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    if (permission.granted) {
      getAudioFiles();
    }

    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();

      if (status === "denied" && canAskAgain) {
        permissionAlert();
      }

      if (status === "granted") {
        getAudioFiles();
      }

      if (status === "denied" && !canAskAgain) {
        setPermissionError(true);
      }
    }
  };

  useEffect(() => {
    permissionAlert();
  }, []);

  if (permissionError) return <View style={{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }}>
    
    <Text style={{fontSize:25}}>Accept Permissions First</Text>
  </View>;

  return (
    <AudioContext.Provider value={{ audioFiles}}>
      {children}
    </AudioContext.Provider>
  )
};

export default AudiooProvider;