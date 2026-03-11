import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#81aed1', 
        // margin: 20,
        padding: RFPercentage (2),
        flex: 1,
        borderRadius: RFPercentage (2),
    },
    titulo: {
        fontSize: RFPercentage (3), 
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage0 (5),
    },
    texto: {
        fontSize: RFPercentage (2),
        width: '100%',
        textAlign: 'center',
    },
});

export default styles;