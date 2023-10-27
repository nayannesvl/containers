import React from "react";
import {Text, View, Image, ScrollView} from 'react-native';

import serieS from '../../assets/console.png';
import xSerie from '../../assets/seriex.png';
import styles from "./estilo";

export default function Console(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.img} source={serieS}/>
                <Text style={styles.title}>xbox serie s</Text>
                <Text style={styles.subText}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
                <Text style={styles.txt}>O Série S é pra quem buscar jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e performance.</Text>
            
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={xSerie}/>
                <Text style={styles.title}>xbox serie x</Text>
                <Text style={styles.subText}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
                <Text style={styles.txt}>O Série S é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
            
            </View>
        </ScrollView>
    )
}