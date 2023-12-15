import { StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { colors } from '../global/colors'

const ProductItem = ({product,onSelectProductIdEvent}) => {

  return (
    <TouchableOpacity onPress={()=>onSelectProductIdEvent(product.id)} style={styles.containerProductItem}>
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