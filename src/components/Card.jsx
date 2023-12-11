import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children,style}) => {
  return (
    <View style={{...styles.container,...style}}>
      <Text>{children}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        shadowColor: '#9999A1',
        shadowOffset:{
            width:3,
            height:5,
        },
        elevation:5,
        shadowOpacity:1,
        shadowRadius:1,
    },
})