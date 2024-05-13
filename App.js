import { Alert, Button, Text, View, StyleSheet } from 'react-native';
import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import MRZScanner from './MRZScanner';
import { SafeAreaView, SafeAreaProvider  } from 'react-native-safe-area-context';

export default function App() {
  const [scanning,setScanning] = useState(false);

  const showResults = (result) => {
    console.log("result");
    console.log(result);
    if (result) {
      Alert.alert("MRZ Scanner",result);
      setScanning(false);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {scanning &&
          <MRZScanner
            onScanned={(results)=>showResults(results)}
            onClosed={()=>setScanning(false)}
          ></MRZScanner>
        }
        {!scanning &&
          <View style={{alignItems:'center'}}>
            <Text style={styles.title}>
                Dynamsoft Label Recognizer Demo
              </Text>
            <Button title='Start MRZ Scanner' onPress={() => setScanning(true)}></Button>
          </View>
        }
        <StatusBar style="auto"/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});