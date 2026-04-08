import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';
import Exemplo03 from './src/exemplos/ex03';
import Exemplo04 from './src/exemplos/ex04';

import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv-02';
import Atividade03 from './src/atividades/atv03';
import Atividade04 from './src/atividades/atv04';


export default function App() {
  return (
    <View style={styles.container}>
       <Atividade04/>
      <StatusBar style= "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0c1e13',
    padding: 16,
  },
});