import { useState } from 'react';
import { View, Text, Button,  TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }
 
    const handleExibeBotao2 = () => {
         setNumero(numero - 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            <Text style={styles.texto}>+ | -</Text>

            <View style={styles.botaoAlert}>
                <Button
                    title='-'
                    color={'darkslategrey'}
                    onPress={handleExibeBotao2}
                />
            </View>

            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Atividade03;