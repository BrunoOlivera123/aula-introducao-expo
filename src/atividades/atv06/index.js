import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = ' Valor incorreto !';
    const [mens, setMens] = useState('');
    const [corb, setCorb] = useState('blue');

    function calculaImc() {

        const p = parseFloat (peso);
        const a = parseFloat (altura);

        if (!p || !a) {
            setMens (mensErro);
            return;
        }

        const tmpImc = p / ( a * a );
        setImc(tmpImc); 
        
        if (tmpImc < 18.5) {
            setMens("Abaixo do peso");
            setCorb('red');
        } else if (tmpImc < 25 ) {
            setMens(" Peso normal");
            setCorb('green');
        } else if (tmpImc < 30) {
            setMens(" Sobrepeso");
            setCorb('orange');
        } else {
            setMens("Obesidade");
            setCorb('red');
        } 
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 6 </Text>

            <View style={styles.ladoalado}>
                <Input placeholder= 'Peso'  valor={peso} atualizaValor={setPeso}/>
                <Input placeholder= 'Altura' valor={altura} atualizaValor={setAltura}/>
            </View>
            <Text style={styles.imc}>
                {isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem, { color: corb}]}>
                {mens}
            </Text>
            <Botao calcular ={() => calculaImc ()} > Calcular  </Botao>
        </View>
    )
}
