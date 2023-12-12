import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import {EvilIcons,Entypo} from '@expo/vector-icons'

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput,setSearchInput] = useState('')

    const onResetSearchHandler = () => {
        setSearchInput('')
        onSearchHandlerEvent(searchInput)
    }

  return (
    <View style={styles.searchContainer}>
        <TextInput
            style={styles.textInput}
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder='Search...'
        />
        <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
            <EvilIcons name='search' size={24} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onResetSearchHandler}>
            <Entypo name='cross' size={24} color='black'/>
        </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
    },
    textInput:{
        width: '80%',
    },
})