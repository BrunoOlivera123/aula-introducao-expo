import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo, descricao, valor, img }) {
    return(
        <View style={styles.container} imagem >
            <Image source={img} style={styles.imagem} />
           
            <View>
                <Text style={styles.titulo}>{titulo}</Text> 
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.valor}>{valor}</Text>
            </View>
        </View>
    );
}

export default Card;