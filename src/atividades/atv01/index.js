import { View, Text }  from 'react-native';

import styles from './styles';


function atividade01 () {
    return (
        <View style={styles.container} >
            <Text style={styles.titulo} > Atividade 1 </Text>
            <Text style={styles.texto} >
                Aula de react Native com Expo
            </Text>
            <text style={styles.texto2} > Quero um pix de 500tao</text>
        </View>
    );
};

export default atividade01;
