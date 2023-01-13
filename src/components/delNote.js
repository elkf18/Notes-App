import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function delNote(note,navigation){
    if(note.id === undefined){
        Alert.alert(
            'Hapus',
            'Apakah anda yakin menghapus ini?',
            [
                {
                    text:'OK',
                    style:'kembali'
                }
            ]
        );
    }else{
        try{
            let data = JSON.parse(await AsyncStorage.getItem('notes'))
            for(let i = 0; i < data.length; i++) {
                if(data[i].id === note.id) {
                    data.splice(i,1);
                }
            }
            await AsyncStorage.setItem('notes', JSON.stringify(data));
            navigation.goBack();
        }catch(err){
            console.log(err);
            Alert.alert(
                'ERRO',
                'Não foi possivel deletar o arquivo',
                [
                    {
                        text:'OK',
                        style:'cancel'
                    }
                ]
            );
        }
    }
    
}