import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import search from '../../../assets/data/search'
import styles from './styles'

const DestinationSearch = () => {

    const [inputText, setInputText] = useState<string>('')
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder='Where are you going?' onChangeText={setInputText} value={inputText} />
            <FlatList data={search} renderItem={({ item }) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name='location-pin' size={35} />
                    </View>
                    <Text>{item.description}</Text>
                </View>
            )}
            />
        </View>
    )
}

export default DestinationSearch