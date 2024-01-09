import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import productsDb from '../data/products.json'
import { useEffect, useState } from 'react'
import {colors} from '../global/colors'
import { addItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const ProductDetail = ({route}) => {
  const [productSelected,setProductSelected] = useState()
  const [isLoading,setIsLoading] = useState(true)

  const productId = route.params

  useEffect(()=>{
    const productFinded = productsDb.find(product=>product.id===productId)
    setProductSelected(productFinded)
    setIsLoading(false)
  }
  ,[productId])

  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addItem({...productSelected,quantity:1}))
  }

  return (
    <>
      {
      isLoading
      ?
      <ActivityIndicator/>
      :
      <>
      <ScrollView>
        <Image
            style={styles.imageProduct}
            resizeMode='cover'
            source={{uri: productSelected.image}}
        />
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{productSelected.title}</Text>
            <Text style={styles.description}>{productSelected.description}</Text>
            <Text style={styles.price}>$ {productSelected.price}</Text>
            <TouchableOpacity style={styles.buyButton} onPress={onAddToCart}>
              <Text style={styles.buyText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </>
       }
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: colors.contrast,
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  buyText: {
    color: '#fff'
  }
})