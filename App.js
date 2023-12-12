import { ActivityIndicator } from 'react-native';
import Categories from './src/screens/Categories'
import ProductsByCategories from './src/screens/ProductByCategory'
import {useFonts} from 'expo-font'
import {useState} from 'react'

export default function App() {

  const [categorySelected,setCategorySelected] = useState('')

  const [fontLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  })

  if(!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <>{
      categorySelected 
        ?
        <ProductsByCategories category={categorySelected}/>
        :
        <Categories onSelectCategoryEvent={onSelectCategory}/>
    }
    </>
  );
}

