import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#0026ff',
        width: '95%',
        borderRadius: RFValue(20),
    },
    txtBotao: {
        padding: RFValue(20),
        fontSize: RFValue(22),
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnPress: {
        borderWidth: RFValue(4),
        borderColor: '#1100ff8e',
    },
});

export default styles;