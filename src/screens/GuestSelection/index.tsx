import React from 'react';

import { Pressable, Text, View } from 'react-native';
import GuestSelector from '../../components/GuestSelector';
import styles from './styles';




const GuestSelection = () => {
    return (
        <View style={styles.container}>
            <GuestSelector type='Adult' subType='Ages 13 or more' />
            <GuestSelector type='Children' subType='Ages 2 - 12' />
            <GuestSelector type='Infants' subType='Under 2' />
        </View>
    )
}


export default GuestSelection