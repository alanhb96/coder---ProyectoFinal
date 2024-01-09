import { FlatList, StyleSheet} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'

const Categories = ({navigation}) => {

/*   const categories = useSelector(state => state.shopReducer.categories) */

  const {data, isLoading, error} = useGetCategoriesQuery()

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>
  )

  return (
    <>
      <FlatList style={styles.categories}
        data={data}
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