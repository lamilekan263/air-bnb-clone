import { StatusBar } from 'expo-status-bar';
import {  ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResultScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import GuestSelection from './src/screens/GuestSelection';

export default function App() {



  return (
    <SafeAreaView style={{ flex: 1 }}  >

      <StatusBar style="auto" />
    
        {/* <Home /> */}
        {/* <SearchResultScreen/> */}
        {/* <DestinationSearch/> */}
      <GuestSelection/>


    </SafeAreaView>
  );
}


