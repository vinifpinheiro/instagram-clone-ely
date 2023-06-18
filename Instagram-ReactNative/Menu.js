import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <MaterialIcons name="home-filled" size={28} color="black" />
                <AntDesign name="search1" size={28} color="black" />
                <MaterialCommunityIcons name="movie-play-outline" size={28} color="black" />
                <MaterialCommunityIcons name="shopping-outline" size={28} color="black" />
                <Image style={styles.image} source={require('./assets/img/me.jpg')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#fff',
        borderTop:2,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 20,
    },
    image: {
        width: 38, // ajuste o tamanho conforme necessário
        height: 38, // ajuste o tamanho conforme necessário
        borderRadius:24,
    },
});
