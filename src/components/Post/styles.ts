import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    postImage: {
        width: '100%',
        aspectRatio: 3/2,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    bedrooms: {
        marginVertical: 4,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 4
    },
    prices: {fontSize:18,  flexDirection: 'row', },
    oldPrice: {color: '#5b5b5b', textDecorationLine:'line-through'},
    price: { fontWeight: 'bold', marginHorizontal: 10},
    totalPrice: {
        color: '#5b5b5b5',
        textDecorationLine:'underline'
    }
})


export default styles