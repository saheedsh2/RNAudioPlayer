import { StyleSheet, Text, View } from 'react-native'

const Playlist = () => {

  return (
    <View style={styles.container}>
      <Text>Playlist</Text>
    </View>
  )
}

export default Playlist

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    }
})