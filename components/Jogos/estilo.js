import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#147b0e',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 20,
        
    },
    img: {
        width: 350,
        height: 150
    },
    txtImg: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'black',
        padding: 10,
        opacity: 0.7,
        lineHeight: 20,
    },
    txtJogo: {
        color: 'white',
        marginTop: 5,
        lineHeight: 20,
    },
    box: {
      marginBottom:   40,
    }
});

export default styles;