import { StyleSheet, Dimensions } from 'react-native';
import Colors from './../../styles/colors';

const width = (Dimensions.get('window').width - 50)/2
const height = (Dimensions.get('window').height - 200)/2
const style = StyleSheet.create({
    noteArea:{
        backgroundColor: '#6073EF',
        width: width,
        height: height,
        padding: 10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4
    },
    txtNoteTitle:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    txtNote:{
        color:'#fff',
    }
})

export default style;