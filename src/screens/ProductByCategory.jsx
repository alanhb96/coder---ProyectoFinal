import {FlatList, StyleSheet} from 'react-native'
import productsDb from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import {useEffect,useState} from 'react'
import Search from '../components/Search'


const ProductByCategory = ({category,onSelectProductIdEvent}) => {

  const [productsByCategory,setProductsByCategory] = useState([])
  const [search,setSearch] = useState('')
  
  useEffect(()=>{
    const productsFilteredByCategory = productsDb.filter(product=>product.category===category)
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  }
  ,[category,search])


  const renderProductItem = ({item}) => (
    <ProductItem onSelectProductIdEvent={onSelectProductIdEvent} product={item}/>
  )
  

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
    <Header title="Products"/>
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