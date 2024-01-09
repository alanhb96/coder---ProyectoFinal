import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem'
import { useState, useEffect } from 'react';
import { colors } from '../global/colors'
import { usePostOrderMutation } from '../services/shopService'; 
 
const Cart = ({navigation}) => {

  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation() 


  const confirmCart = () => {
    triggerPost({total,cartItems,user:"LoggedUser"})
    //navigation.navigate("categories")
  }

  const renderCartItem = ({item}) => (
    <CartItem item={item}/>
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item=>item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
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