import { TouchableOpacity, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import styles from './styles';

export default function ItemLista({ children, id, deleteItem }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.txtItem}>{children}</Text>
            <MaterialIcons
                name="delete-outline"
                size={100}
                color="#ff0000"
                onPress={() => deleteItem(id)}
            />
        </TouchableOpacity>
    );
}