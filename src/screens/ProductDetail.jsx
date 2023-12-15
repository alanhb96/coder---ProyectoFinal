import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import productsDb from '../data/products.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import {colors} from '../global/colors'

const ProductDetail = ({productId}) => {
  const [productSelected,setProductSelected] = useState()
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const productFinded = productsDb.find(product=>product.id===productId)
    setProductSelected(productFinded)
    setIsLoading(false)
  }
  ,[productId])

  return (
    <>
      {
      isLoading
      ?
      <ActivityIndicator/>
      :
      <>
      <Header title='Product Detail'/>
      <View>
        <Image
            style={styles.imageProduct}
            resizeMode='cover'
            source={{uri: productSelected.image}}
        />
          <View style={styles.detailContainer}>
            <Text style={styles.title}>{productSelected.title}</Text>
            <Text style={styles.description}>{productSelected.description}</Text>
            <Text style={styles.price}>$ {productSelected.price}</Text>
            <TouchableOpacity style={styles.buyButton} onPress={() => null}>
              <Text style={styles.buyText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
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