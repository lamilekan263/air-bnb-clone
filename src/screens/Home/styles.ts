import { Dimensions, StyleSheet } from "react-native";



const styles = StyleSheet.create({
    body: {
        flex: 1,
        height: '100%',
         position: 'relative'
    },
 
    imageBackground: {
        width: '100%',
        height: 600,
        justifyContent: 'center',
        resizeMode: 'cover'
       
    },

    searchButton: {
         width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        height: 60,
        position: 'absolute',
        top: 20,
        backgroundColor: 'white',
        marginRight: 8,
         marginLeft: 8,
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    searchButtonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    bodyText: {
        fontSize: 90,
        marginRight: '30%',
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white'
    },

    exploreBtn: {
   
        borderRadius: 10,
        height: 60,
        backgroundColor: 'white',
        marginRight: 8,
         marginLeft: 10,
       width: 200,
        justifyContent: 'center',
        alignItems: 'center'  
    }
})


export default styles