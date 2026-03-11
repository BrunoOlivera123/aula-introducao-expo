import { View, Text, Image } from 'react-native'; 

import styles from './styles';

//import img from '../../../assets/002-1-react-native.png'; 
import imgvg from '../../../assets/vegas.webp'; 
import imgaf from '../../../assets/after.png'; 

import Mensagem from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Image source={imgvg} style={styles.imagem} /> 
             <Image source={imgaf} style={styles.imagem} /> 

            <Mensagem titulo={'Sony Vegas Pro 22'} >
                Editor de videos.
            </Mensagem>
            <Mensagem titulo={'After Efects 2025'}>
                Editor de efeitos.
            </Mensagem>
            <Mensagem titulo={'Photoshop 2025'}>
                Editor de imagens.
            </Mensagem>
        </View>
    );
}

export default Atividade02;