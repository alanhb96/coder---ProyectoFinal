import {FlatList, StyleSheet} from 'react-native'
import ProductItem from '../components/ProductItem'
import {useEffect,useState} from 'react'
import Search from '../components/Search'
import { useDispatch, useSelector } from 'react-redux'
import shopSlice from '../features/shopSlice'


const ProductByCategory = ({navigation,route}) => {

  const [productsByCategory,setProductsByCategory] = useState([])
  const [search,setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory)
  
  useEffect(()=>{
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  }
  ,[category,search])


  const renderProductItem = ({item}) => (
    <ProductItem navigation={navigation} product={item}/>
  )
  

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
    <Search onSearchHandlerEvent ={onSearch}/>
    <FlatList
      data={productsByCategory}
      renderItem={renderProductItem}
      keyExtractor={item=>item.id}
    />
    </>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    }
})