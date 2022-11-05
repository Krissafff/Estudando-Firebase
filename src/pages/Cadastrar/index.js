import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from '../../firebaseConnection';



export default function Cadastrar() {

 const [produtos, setProdutos] = useState('');
 
 async function cadastrar(){
    if(produtos !== ''){
      let usuarios =  await firebase.database().ref('usuarios/lista');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        produtos: produtos
      });
      alert('Cadastrado com sucesso!');
      setProdutos('');
    }
 }




 return (
   <View style={estilo.background}>
    <Text style={estilo.titulo}>Monte a sua lista</Text>
    <View style={estilo.lista}>
    <TextInput
        style={estilo.input}
        placeholder="produtos"
        value={produtos}
        onChangeText={(texto) => setProdutos(texto)}
    />

    <Button 
    title="ola"
    onPress={cadastrar}
    />
    
    </View>
      
   </View>
  );
}

const estilo = StyleSheet.create({
    background:{
        backgroundColor:'#FFF',
        flex: 1,
        alignItems: 'center'
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        margin: 10
    },
    lista:{
        padding: 100,
        backgroundColor: '#FFF',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        elevation: 2
    },
    input: {
        height: 50,
        width: 150,

        borderWidth: 1,
        padding: 10,
      },
})