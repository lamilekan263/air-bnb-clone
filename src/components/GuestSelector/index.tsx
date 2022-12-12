import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

interface GuestSelectorI {
    type: string,
    subType: string
}

const GuestSelector = ({ type, subType }: GuestSelectorI) => {

    const [counter, setCounter] = useState<number>(0)
    return (
        <View >
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>{type}</Text>
                    <Text style={{ fontWeight: 'normal', color: 'lightgrey' }}>{subType}</Text>
                </View>
                <View style={[styles.row, { borderBottomWidth: 0 }]}>
                    <Pressable style={styles.button} onPress={() => setCounter(Math.max(0, counter - 1))}>
                        <Text >-</Text>
                    </Pressable>
                    <Text style={styles.counterNumber}>{counter}</Text>
                    <Pressable style={styles.button} onPress={() => setCounter(Math.max(0, counter + 1))}>
                        <Text >+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GuestSelector