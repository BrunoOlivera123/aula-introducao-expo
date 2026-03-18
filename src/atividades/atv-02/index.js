import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import imgpw from '../../../assets/power.png'; 
import imgwd from '../../../assets/word-removebg-preview.png';
import imgex from '../../../assets/excel.png'; 

import Mensagem from './mensagens';
import Card from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Pacote Office</Text>
           
            <Card 
                titulo={'Word'} 
                descricao={'Arquivo para textos.'}
                valor= {'R$ 999,99'}
                img = {imgwd}
            />
                    
            <Card 
                titulo={'Excel'}
                descricao={'Aplicativo para planilhas'}
                valor= {'R$ 999,99'}
                img = {imgex}
            />

            <Card 
                titulo={'Power Point'}
                descricao={'Aplicativo para apresentaçoes'}
                valor= {'R$ 999,99'}
                img = {imgpw}
            
            />
                
                
        </View>
    );
}

export default Atividade02;