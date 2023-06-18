import { View, Image, StyleSheet } from 'react-native';
import { Feather, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function Titulo() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('./assets/Instagram-Logo.png')} />
                <View style={styles.iconsContainer}>
                    <Feather name="plus-square" size={25} color="black" />
                    <AntDesign name="hearto" size={25} color="black" />
                    <FontAwesome5 name="comment" size={25} color="black" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        marginRight: 14,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        paddingTop: 16,
        width: 380,
    },
    image: {
        left:-35,
        width: 200,
        height: 100,
        transform: [{ scale: 0.5 }],
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
});