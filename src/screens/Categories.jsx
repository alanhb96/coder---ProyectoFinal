import { FlatList, StyleSheet} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'

const Categories = ({navigation}) => {

  const categories = useSelector(state => state.shopReducer.categories)

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  return (
    <>
      <FlatList style={styles.categories}
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
      marginBottom:90,
    }
})