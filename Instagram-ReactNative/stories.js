import React, { useRef } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function Stories() {
    const scrollViewRef = useRef(null);

    const scrollToNextImage = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: 100, y: 0, animated: true }); // ajuste o valor de 'x' conforme necessário
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.header}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.minhaimgame} source={require('./assets/img/1.jpeg')} />
                    <Text style={styles.imageLabel}>Lebron</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./assets/img/2.jpeg')} />
                    <Text style={styles.imageLabel}>Jordan</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./assets/img/3.jpeg')} />
                    <Text style={styles.imageLabel}>Kobe</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./assets/img/4.jpeg')} />
                    <Text style={styles.imageLabel}>Curry</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('./assets/img/5.jpeg')} />
                    <Text style={styles.imageLabel}>Irving</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        left:15,
        top:100,
        height:100,
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: {
        alignItems: 'center',
    },
    minhaimgame: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'gray',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'red',
    },
    imageLabel: {
        marginTop: 5,
    },
});
