import { ActivityIndicator } from 'react-native';
/* import Categories from './src/screens/Categories'
import ProductsByCategories from './src/screens/ProductByCategory'
import ProductDetail from './src/screens/ProductDetail' */
import Navigator from './src/navigation/Navigator'
import {useFonts} from 'expo-font'
import {useState} from 'react'

export default function App() {

  const [categorySelected,setCategorySelected] = useState('')
  const [productIdSelected,setProductIdSelected] = useState('')

  const [fontLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  })

  if(!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onSelectProductId = (productId) =>{
    setProductIdSelected(productId)
  } 

  return (
    <>
      <Navigator/>

      {
/*       productIdSelected
      ?
      <ProductDetail productId={productIdSelected}/>
      :
      categorySelected 
      ?
      <ProductsByCategories category={categorySelected} onSelectProductIdEvent={onSelectProductId}/>
      :
      <Categories onSelectCategoryEvent={onSelectCategory}/> */
      } 
    </>
  );
}

