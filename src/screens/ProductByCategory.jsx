import {ActivityIndicator, FlatList, StyleSheet} from 'react-native'
import ProductItem from '../components/ProductItem'
import {useEffect,useState} from 'react'
import Search from '../components/Search'
import { useDispatch, useSelector } from 'react-redux'
import shopSlice from '../features/shopSlice'
import { useGetProductsByCategoryQuery } from '../services/shopService'


const ProductByCategory = ({navigation,route}) => {

  const [productsByCategory,setProductsByCategory] = useState([])
  const [search,setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)
 /*  const productsFilteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory) */
  const {data: productsFilteredByCategory, isLoading, error} = useGetProductsByCategoryQuery(category)
  
  useEffect(()=>{
    if(!isLoading){
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
    }
  }
  ,[isLoading,category,search])


  const renderProductItem = ({item}) => (
    <ProductItem navigation={navigation} product={item}/>
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
    {
      isLoading?
        <ActivityIndicator/>
      :
      <>
        <Search onSearchHandlerEvent ={onSearch}/>
        <FlatList
          data={productsByCategory}
          renderItem={renderProductItem}
          keyExtractor={item=>item.id}
        />
      </>
    }
    </> 
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    }
})