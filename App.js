import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>

        <HomeScreen />
        <StatusBar style="auto" />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
