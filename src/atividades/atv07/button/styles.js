import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        height: (Dimensions.get('window').height / 6.5) - 6,
        width: (Dimensions.get('window').width / 4) - 8.5,
        backgroundColor: '#f0f0f0',
        borderWidth: RFValue(1),
        borderColor: '#888',
        justifyContent: 'center',
        borderRadius: RFPercentage(2), 
        scale: (0.9),
    },
    txtButton: {
        fontSize: RFPercentage(5),
        textAlign: 'center',
    },
    operationButton: {
        backgroundColor: '#3072b1',
    },
    operationTxtButton: {
        color: '#ffffff',
    },
    buttonDouble: {
        width: ((Dimensions.get('window').width / 4) - 8.5) * 2,
    },
    buttonTriple: {
        width: ((Dimensions.get('window').width / 4) - 8.5) * 3,
    },
});
export default styles;