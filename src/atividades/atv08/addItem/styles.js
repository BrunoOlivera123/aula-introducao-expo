import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: RFValue(1),
        marginTop: RFValue(10),
        borderColor: 'deepskyblue',
        
    },
    input: {
        height: RFValue(50),
        fontSize: RFValue(17),
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'deepskyblue',
        padding: RFValue(15),
    },
    buttonText: {
        color: '#fafafa',
        fontSize: RFValue(20),
        textAlign: 'center',
    },
});

export default styles;