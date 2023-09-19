import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AddUser() {
    var users= useSelector((state) => state.users )
const [userName,setUserName]=useState("")
const [age,setAge]=useState(0)
const dispatch=useDispatch();

  const addNewUser=()=>{
    var newUser={userName:userName,age:age};

    users.push(newUser);
    console.log(users);
    dispatch(changerUsersData(users));
  }


  return (
    <View>

<input style={styles.Input} type="text"  onChange={(e)=>{setUserName(e.target.value)}}/>
<input style={styles.Input} type="number"  onChange={(e)=>{setAge(e.target.value)}} />
<button onClick={()=>{addNewUser()}}> add User </button>

    </View>
  )
}

const styles=StyleSheet.create({
    Input:{
        display:'block',width:"100%",
        marginTop:20,marginbottom:20
    }
})