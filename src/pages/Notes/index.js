import React, { useState, useEffect, useLayoutEffect } from 'react'
import { SafeAreaView, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Style from './style';
import Save from '../../components/saveNote';
import Delete from '../../components/delNote';
import { AntDesign } from '@expo/vector-icons';

export default function Notes({route,navigation}){
    const [date, setDate] = useState(new Date())
    const [note,setNote] = useState({
        title:'',
        note:'',
        date: date,
        notificationId: null
    });
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
        if(route.params.note){
            setNote(route.params.note);
        }
    },[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return(
                    <View style={{width: 100, flexDirection:'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress={()=>Save(note, navigation)}>
                            <AntDesign name="check" size={24} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Delete(note, navigation)}>
                            <AntDesign name="delete" size={24} color="black"/>
                        </TouchableOpacity>
                    </View>
                )
            }  
        })
    },[navigation,note])

    return(
        <SafeAreaView style={Style.conteiner}>
            <TextInput 
                style={Style.txtTitleNote} 
                autoFocus={true} 
                maxLength={40}
                value={note.title} 
                placeholder={'Judul'}
                onChangeText={text=>setNote({ ...note, title: text })}
            >
            </TextInput>
            <ScrollView>
                <TextInput style={Style.txtInput} 
                    multiline={true} 
                    value={note.note}
                    placeholder={'isi'}
                    onChangeText={text=>setNote({ ...note, note: text })}
                    >
                </TextInput>
            </ScrollView>

        </SafeAreaView>
    )
}