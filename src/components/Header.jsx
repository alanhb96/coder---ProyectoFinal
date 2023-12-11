import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../global/colors'

const Header = (title) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle:{
        color:'#fff',

    }
})