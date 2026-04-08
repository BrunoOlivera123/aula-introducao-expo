import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [nome, setnome] = useState('');
    const [sobrenome, setsobrenome] = useState(''); 
    const [nomecompleto, setnomecompleto] = useState(''); 

    function handleExibeMensagem() {
        setnomecompleto(` ${nome} ${sobrenome}` );
        setnome(' ');
        setsobrenome(' ');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txt}>{nomecompleto}</Text>

            <TextInput
                onChangeText={setnome}
                value = {nome}
                placeholder = 'Nome'
                maxLength = {10}
                style = {styles.input}
            />

            <TextInput
                onChangeText={setsobrenome}
                value = {sobrenome}
                placeholder = 'Sobrenome'   
                maxLength = {10}         
                style = {styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity> 

        </View>
    );
}


