
import React,{Component} from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import bg from 'assets/contoh.png';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../../components/SearchBar';
import Colors from '../../styles/colors';
import Notes from '../../components/RenderNotes';
import Home from '../Home/index';

export default function Intro({navigation}) {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Notely</Text>
        <Text style={styles.isi}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        <ImageBackground source={bg} style={styles.image}>
          <View style={{padding: 12, width:150, borderRadius:8, alignItems:''}}>
            <View style={{backgroundColor:'#6073EF', paddingVertical:6, borderRadius:20, marginTop:200, flexDirection:'row', justifyContent:'center'}} >
              <Text style={{fontSize:14, fontWeight:'600', color:'white',textAlign:'center'}}>Let's Start</Text>
              <AntDesign name='arrowright' size={20} color='white' onPress={()=>navigation.navigate('Home',{search:false})}/>
            </View>
          </View>
        </ImageBackground>
    </View>
  );
  
  
};
const styles = StyleSheet.create({
  container:{
    padding:23,
    flex: 1,
    top: 0,
    left: 0,
    bottom:0,
    backgroundColor:'#fff',
    overflow:'hidden'
  },
  title:{
    fontSize:24,
    fontWeight:700,
    marginTop:40,
  },
  isi:{
    marginTop:10,
  },
  image: {
    marginTop:10,
    alignItems: 'end',
    justifyContent: 'end',
    // position:'absolute',
  },
});
