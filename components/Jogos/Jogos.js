import React from "react";
import { View, ImageBackground, Text, ScrollView } from 'react-native';

import styles from "./estilo";
import forza from '../../assets/jogo-3.png';
import cyber from '../../assets/jogo-2.png';
import halo from '../../assets/jogo-4.png';

export default function Jogos() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Jogos em 4K</Text>
                <Text style={styles.txt}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

                <View style={styles.box}>
                    <ImageBackground style={styles.img} source={forza} >
                        <Text style={styles.txtImg}>Forza Horizon 5</Text>
                    </ImageBackground>
                    <Text style={styles.txtJogo}>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.</Text>
                </View>

                <View style={styles.box}>
                    <ImageBackground style={styles.img} source={cyber}>
                        <Text style={styles.txtImg}>Cyberpunk 2077</Text>
                    </ImageBackground>
                    <Text style={styles.txtJogo}>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>

                </View>
                <View style={styles.box}>
                    <ImageBackground style={styles.img} source={halo}>
                        <Text style={styles.txtImg}>Halo 5: Guardians</Text>
                    </ImageBackground>
                    <Text style={styles.txtJogo}>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 5.</Text>
                </View>
            </View>
        </ScrollView>
    )
}