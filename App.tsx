import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Post from './src/components/Post';
import feeds from './assets/data/feed'
import Home from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResultScreen';

export default function App() {



  return (
    <SafeAreaView style={{ flex: 1 }}  >

      <StatusBar style="auto" />
      <ScrollView>
        {/* <Home /> */}
        <SearchResultScreen/>
      </ScrollView>


    </SafeAreaView>
  );
}


