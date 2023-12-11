import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'

const Categories = () => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item}/>
  )

  return (
    <>
      <Header title="Categories"/>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item=>item}
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    }
})