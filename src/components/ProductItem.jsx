import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { colors } from '../global/colors'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shopSlice'

const ProductItem = ({product,navigation}) => {

    const dispatch = useDispatch()

  return (
    <TouchableOpacity onPress={()=>{
        dispatch(setProductIdSelected(product.id))
        navigation.navigate("Detail",product.id)}
        } style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
            style={styles.productImage}
            resizeMode='cover'
            source={{uri: product.image}}
        />
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10, 
    },
    productTitle:{
        fontFamily:'Inter-Regular',
        fontSize:16,
        color: colors.contrast,
    },
    productImage:{
        width: 60,
        height: 60
    },
})