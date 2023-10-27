import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#313131',
        justifyContent: 'center',
        padding: 20,
    }, 
    logo:{
        borderRadius: 200,
        width: 80,
        height: 80,
    },
    title:{
        color: '#147b0e',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,

    },
    text:{
        color: 'grey',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 30,

    },
    box:{
        width: 250,
        height: 100,
        backgroundColor: '#147b0e',
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 50,
        justifyContent: 'center',
        
    },
    txtBox: {
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        alignContent: 'space-between',
        margin: 5,
    },
    img: {
        width: 80,
        height: 80,
    },

});

export default styles;