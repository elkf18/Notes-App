import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    conteiner:{
        flex:1,
        paddingHorizontal:20,
        paddingTop: 20,
        backgroundColor:'#fff',
    },
    newNoteButton:{
        position:'absolute',
        bottom:30,
        right:15,
    },
    noteList:{
        justifyContent:'space-between',
        marginBottom: 10,
    },
    txtTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
})

export default style;