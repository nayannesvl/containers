import React from "react";
import { View, Text, Image, Pressable } from 'react-native';

import jogo from '../../assets/jogo-1.png';
import logo from '../../assets/logo.png';
import console from '../../assets/console.png';
import xcloud from '../../assets/xcloud-1.png';
import styles from "./estilo";

export default function TelaInicial(props) {
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>Xbox</Text>
            <Text style={styles.text}>Xbox é uma marca de consoles criada pela Microsoft. {``} Toque nos cards para conhecer.</Text>


            <Pressable style={styles.box} onPress={() => { props.navigation.navigate('Consoles') }}>
                <Image style={styles.img} source={console} />
                <Text style={styles.txtBox}>Conheça os consoles</Text>
            </Pressable>

            <Pressable style={styles.box} onPress={() => { props.navigation.navigate('Jogos') }}>
                <Image style={styles.img} source={jogo} />
                <Text style={styles.txtBox}>Conheça os jogos</Text>
            </Pressable>

            <Pressable style={styles.box} onPress={() => { props.navigation.navigate('XCloud') }}>
                <Image style={styles.img} source={xcloud} />
                <Text style={styles.txtBox}>Conheça o xCloud </Text>
            </Pressable>

        </View>
    )
}