import { View, Text, ImageBackground, Pressable, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Home() {
  return (
    <View style={styles.body}>
      <Pressable style={styles.searchButton} onPress={() => console.log(Dimensions.get('screen').width)}>
        <Text style={styles.searchButtonText}>Where are you going to?</Text>
      </Pressable>
      {/* searchbar */}
      <ImageBackground style={styles.imageBackground} source={{ uri: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} >
        <Text style={styles.bodyText}>
          Go Near
        </Text>

        <Pressable style={styles.exploreBtn}>
          <Text>Explore newby stays</Text>
        </Pressable>
      </ImageBackground>

      {/* text */}


      {/* explore button */}

    </View>
  )
}




