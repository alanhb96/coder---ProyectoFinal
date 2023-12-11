import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#fff',
        margin: 10,
        padding:10,
    },
    text:{
        textTransform: 'capitalize',
        fontSize: 16,
    }
})