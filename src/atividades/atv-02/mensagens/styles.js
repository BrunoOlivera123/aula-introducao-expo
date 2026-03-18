import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: RFPercentage(0.3), 
        borderColor: 'darkslategrey', 
        padding: RFPercentage(.5), 
        borderRadius: RFPercentage(2.5), 
        width: '90%', 
        alignItems: 'center', 
        marginBottom: RFPercentage(2), 
        
    }, 
    titulo: {
        fontSize: RFPercentage(3.5), 
        fontWeight: 'bold', 
        color: '#000000', 
    }, 
    valor:{
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: RFPercentage(2), 
    },
    descricao:{
        color: '#000000',
        fontSize: RFPercentage(2), 
        
    },
   
    imagem: {
        height: RFPercentage(15), 
        //width: RFPercentage(28),  
        width: '23%', 
        resizeMode: 'contain', 
        flexDirection: 'row',
        // filter: 'grayscale(80%)', 
        // filter: 'saturate(10%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    }, 
});


export default styles;