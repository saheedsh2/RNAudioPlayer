import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AudioListItem = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <View style={styles.thumbnail}>
                <Text style={styles.thumbnailText}>A</Text>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Title</Text>
            </View>
        </View>
        <View style={styles.rightContaienr}></View>
    </View>
  )
}

export default AudioListItem

const styles = StyleSheet.create({})