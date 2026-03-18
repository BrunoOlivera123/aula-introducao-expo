import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, // container ocupa 100% da tela
        backgroundColor: '#ffffff', // cor do container
        borderRadius: 10, // borda curvada
        padding: 8, 
        alignItems: 'center', // alinhamento horizontal - flexDirection collumn
    }, 
    titulo: {
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: 4, // expessura da borda
        marginTop: 20, // margem acima do elemento
        marginBottom: 20, // margem abaixo do elemento
        paddingVertical: 10, // espaço interno
        width: '100%', // largura do objeto
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: '#000000', // cor do texto 
        borderColor: 'darkslategrey', // cor da borda 
        borderRadius: 50, // arrendondar borda
    }, 
    
});

export default styles;