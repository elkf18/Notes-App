import React, { useState } from 'react'
import {View, TextInput} from 'react-native'
import Style from './style'
import { AntDesign } from '@expo/vector-icons'; 

export default function SearchBar({data,onChange}){
    const [masterData,setMasterData] = useState(data);
    const search = (text)=>{
        if(text){
            const newData = data.filter((item)=>{
                const itemTitle = item.title ? item.title.toUpperCase():''.toUpperCase();
                const titleSearch = text.toUpperCase();
                return itemTitle.indexOf(titleSearch) > -1;
            })
            onChange(newData);
        }else{
            onChange(masterData);
        }
    }

    return(
        <View style={Style.searchArea}>
            <AntDesign name="search1" size={16} style={{marginRight:5}} />
            <TextInput placeholder='Search Anything' maxLength={50} onChangeText={(text)=>search(text)} style={{color:'#C8CACB', outline: 'none'}}/>
        </View>
    )
}