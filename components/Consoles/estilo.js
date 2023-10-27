import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    img: {
        width: 200,
        height: 200,
    },
    title: {
        color: '#1d671d',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 30,
    },
    box: {
        alignItems: 'center',
        textAlign: 'center',
        marginVertical: 20,
        padding: 10,
        
    },
    txt:{
        textAlign: 'center',
        marginTop: 10,
    },
    subText:{
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 17,
    }
})

export default styles;