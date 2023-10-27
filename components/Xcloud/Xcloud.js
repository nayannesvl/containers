import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";

import styles from "./estilo";
import fundo from '../../assets/fundo-xcloud.png';
import xcloud from '../../assets/xcloud-2.png';


export default function Xcloud() {
    return (
        <ImageBackground style={styles.container} source={fundo} resizeMode='cover' >
            <Text style={styles.title}>Xbox Cloud Gaming</Text>
            <Text style={styles.sub}>Serviço de streaming de jogos</Text>

            <View>
                <Text style={styles.txt}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
                <Text style={styles.txt}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
                <Text style={styles.txt}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
            </View>

            <Image style={styles.img} source={xcloud}/>

        </ImageBackground>
    )
}