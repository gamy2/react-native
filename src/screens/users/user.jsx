import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {

    var users= useSelector((state) => state.users )
    console.log(users);
  return (

    <View style={styles.usersContainer}>
     <FlatList  style={{width: '100%',}}
     data={users} 
        renderItem={({item}) => <Text>{item.userName}</Text>}
        >
        
     </FlatList>
    </View>
  )
}


const styles = StyleSheet.create({
    usersContainer:{
    justifyContent: 'center',
    width: '100%',
    }
});