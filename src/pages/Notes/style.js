import { StyleSheet } from 'react-native'
import Colors from '../../styles/colors'

const style = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor:'#fff',
        padding:20
    },
    txtInput:{
        fontSize:18,
        marginLeft:10,
        outline: 'none',
        height: 600,
        width:300,
    },
    txtTitleNote:{
        width:'100%',
        padding:10,
        borderBottomWidth:0.5,
        borderColor:'#000',
        marginBottom:20,
        fontSize:20,
        color:'#808080',
        outline: 'none',
    }
})

export default style;