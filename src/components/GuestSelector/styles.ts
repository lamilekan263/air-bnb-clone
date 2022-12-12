import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        padding: 10
    },
    button: {
        borderWidth: 1,
        borderRadius: 95,
        padding: 10,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgrey',
      
    },
    
    counterNumber: {
        paddingHorizontal: 10
    }
})


export default styles