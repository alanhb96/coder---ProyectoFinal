import { FlatList, StyleSheet} from 'react-native'
import Header from '../components/Header'
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'

const Categories = ({onSelectCategoryEvent}) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
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