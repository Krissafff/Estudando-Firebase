import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from './src/firebaseConnection';

export default function estudandoFirebase() {
 return (
   <View style={estilo.container}>
    <Text>Olá</Text>
   </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30
  }
})