import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({data}) {
 return (
   <View style={style.container}>
    <Text style={style.textos}>{data.produtos}</Text>
   </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    marginBottom: 8,
    marginEnd: 15,
    marginStart: 15,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    elevation: 1
  },
  textos:{
    fontSize: 16
  }
})