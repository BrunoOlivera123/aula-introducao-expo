import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        height: (Dimensions.get('window').height / 6) - 5,
        width: (Dimensions.get('window').width / 4) - 7,
        padding: RFValue(10),
        backgroundColor: '#ffffff',
        borderWidth: RFValue(1),
        borderColor: '#000000',
        justifyContent: 'center',
        borderRadius: RFValue(20),
    },
    txtButton: {
        fontSize: RFPercentage(5),
        textAlign: 'center',
    },
    operationButton: {
        backgroundColor: '#314ffa',
    },
    operationTxtButton: {
        color: '#FFF',
    },
    buttonDouble: {
        width: ((Dimensions.get('window').width / 4) - 7) * 2,
    },
    buttonTriple: {
        width: ((Dimensions.get('window').width / 4) - 7) * 3,
    },
});
export default styles;