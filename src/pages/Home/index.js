import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../../firebaseConnection';
import { useNavigation } from '@react-navigation/native';
import Listagem from '../../Listagem';

console.disableYellowBox = true;

export default function Home() {

  const [lista, setLista] = useState([]);

  const navigation = useNavigation();

  useEffect(()=> {
    async function dados(){
    await firebase.database().ref('usuarios/lista').on('value', (snapshot) => {
        setLista([]);
       snapshot.forEach((childItem) => {
        let data = {
            key: childItem.key,
            produtos: childItem.val().produtos
        };
        setLista(oldArray => [...oldArray, data]);
       })
    });
    }
    dados();
    },[]);



 return (
   <View style={estilo.background}>
   <View style={estilo.containerColumn}>
    <StatusBar
    backgroundColor="orange"
    />

    <View style={estilo.containerRow}>
    <Image source={require('../../../assets/menu.png')} style={{width: 20, height: 20, margin: 20}} />
    <Image source={require('../../../assets/user.png')} style={{width: 20, height: 20, margin: 20}} />
    </View>

    <Text style={estilo.titulo}>Crie a sua lista de compras</Text>

    <View style={estilo.containerCard}>
      <TouchableOpacity style={estilo.card} onPress={() => navigation.navigate('Cadastrar')}>
       <Image source={require('../../../assets/x-burger.png')} style={{width: 30, height: 30,}} />
      </TouchableOpacity>

      <View style={estilo.card}>
       <Image source={require('../../../assets/legumes.png')} style={{width: 30, height: 30,}} />
      </View>

      <View style={estilo.card}>
       <Image source={require('../../../assets/carne.png')} style={{width: 30, height: 30,}} />
      </View>

      <View style={estilo.card}>
       <Image source={require('../../../assets/frutas.png')} style={{width: 30, height: 30,}} />
      </View>
    </View>

    <View style={estilo.div}/>

    <View style={estilo.containerRow}>
    <Text style={estilo.tituloLista}> Lista de compras</Text>
    <Image source={require('../../../assets/calendario.png')} style={{width: 20, height: 20, margin: 15}} />
    </View>

     <FlatList 
     keyExtractor={item => item.key}
     data={lista}
     renderItem={({item}) => ( <Listagem data={item} />)} />

   </View>
   </View>
   
  );
}

const estilo = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: '#FFF'
    },
  containerColumn:{
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  containerRow:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerCard:{
    flexDirection: 'row',
  },
  titulo:{
    fontSize: 20,
    left: 20,
    color: '#000',
  },
  card:{
    backgroundColor: '#eeeeee',
    padding: 10,
    margin: 20,
    borderRadius: 7,
  },
  div:{
    width: 50,
    height: 2,
    backgroundColor: 'orange'
  },
  tituloLista:{
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  lista:{
    margin: 10,
    left: 15
  }
})