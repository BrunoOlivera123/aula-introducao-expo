import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        borderRadius: RFValue(2),
        padding: RFValue(20),
    },
    titulo: {
         fontSize: RFValue(30),
         color: 'deepskyblue',
         fontWeight: 'bold',
         borderWidth: RFValue(2),
         borderColor: 'deepskyblue',
         marginTop: 10,
         marginBottom: 100,
         padding: 22,
         width: '100%',
         textAlign: 'center',
         borderRadius: 20,
    },
    cabecalho: {
        backgroundColor: 'deepskyblue',
        width: '100%',
        padding: RFValue(20),
        alignItems: 'center',
        color: '#ffffff',
        fontSize: RFValue(20),
        textAlign: 'center',
    },
    lista: {
        marginTop: RFValue(10),
        width: '100%',
    },
});

export default styles;