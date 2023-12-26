import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import Card from './Card'
import {colors} from '../global/colors'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shopSlice'

const CategoryItem = ({category, navigation}) => {

  const dispatch = useDispatch()
  
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("Products", {category})
      dispatch(setCategorySelected(category))
    }
    }>
      <Card style={styles.cardContainer}>
          <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: colors.secondary,
        margin: 10,
        padding:10,
    },
    text:{
        fontFamily: 'Inter-Regular',
        textTransform: 'capitalize',
        fontSize: 18,
    }
})