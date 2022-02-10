import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
export default function Balance(props) {
  return (
    <View style={styles.container}>
      <Text>BALANCE</Text>
      <Text styles={styles.amount} >₹ {props.balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        padding:15,
        justifyContent:"space-between",
        flexDirection:'row'
    },
    amount:{
        alignSelf:'flex-end'
    }
})
