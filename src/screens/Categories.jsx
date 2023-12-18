import { FlatList, StyleSheet} from 'react-native'
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'

const Categories = ({navigation}) => {

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  return (
    <>
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