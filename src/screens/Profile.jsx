import { Pressable, StyleSheet, Text, View, Image} from 'react-native'
import user_data from "../data/user_data.json"
import { useSelector } from 'react-redux'
import LoactionSelector from '../components/LoactionSelector'
import {colors} from '../global/colors'

const Profile = ({navigation}) => {
  
  const image = useSelector(state=>state.authReducer.profilePicture)
  const location = useSelector(state=>state.authReducer.location)
  
  return (
    <>
      <View style={styles.container}>
        <View>
          <Pressable onPress={() => { navigation.navigate("Select image") }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8'
              },
              styles.imageContainer,
            ]}>
            {
              image
                ?
                <Image
                  source={{ uri: image }}
                  style={styles.profilePicture}
                  resizeMode='contain'
                />
                :
                <Image
                  source={require('../../assets/img/user.png')}
                  style={styles.profilePicture}
                  resizeMode='contain'
                />
            }
          </Pressable>
        </View>
        <View style={styles.userDataContainer}>
          <Text style={styles.userTitle}>{user_data.name}</Text>
          <Text style={styles.userData}>{user_data.role}</Text>
          <Text style={styles.userData}>Level: {user_data.level}</Text>
          <Text style={styles.userData}>Adress: {user_data.adress}</Text>
          <Text style={styles.userData}>{user_data.city}</Text>
        </View>
      </View>
      {
        location.addres &&
        <View style={styles.addressContainer}> 
          <Text style={styles.addressTitle}>Last Location</Text>
          <Text style={styles.addressDescription}>{location.address}</Text>
        </View>
      }
      <LoactionSelector />
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    gap: 20,
    alignItems: 'flex-start'
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  userDataContainer: {
    marginTop: 10,
  },
  userTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  imageContainer: {
    borderRadius: 100,
  },
  userData: {
    fontFamily: 'Inter-Regular',
    fontSize: 12
  },
  addressTitle:{
    fontFamily:'Inter-Regular',
    fontSize: 14,
    color: colors.black
  },
  addressDescription:{
    fontFamily: 'Inter-Regular',
    color: colors.black
  }
})