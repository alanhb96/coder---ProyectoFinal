import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native'
import cart_data from '../data/cart_data.json'
import CartItem from '../components/CartItem'
import { useState, useEffect } from 'react';
import { colors } from '../global/colors'
 
const Cart = () => {

  const [total,setTotal] = useState()

  useEffect (()=>{
      const totalCart = cart_data.reduce((accumulator, currentItem)=>(
        accumulator+=currentItem.price*currentItem.quantity
      ),0)
      setTotal(totalCart)
  },[])


  const renderCartItem = ({item}) => (
    <CartItem item={item}/>
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={item=>item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Bold'
  },
  confirmButton:{
    backgroundColor: colors.secondary,
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    fontFamily:'Inter-Bold',
    fontSize:16,
    color: '#fff'
  }  
})