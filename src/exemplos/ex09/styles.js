import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const style = StyleSheet.create({
    square: {
        backgroundColor: '#ffffff',
        borderWidth: RFValue(1),
        borderColor: '#e0e0e0',
        height: RFValue(70),
        width: RFValue(70),
        borderRadius: RFValue(12),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFValue(6),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 3,
    },
    mensagem: {
        fontSize: RFValue(34),
        color: '#222',
        fontWeight: '700',
    },
    status: {
        marginBottom: RFValue(12),
        fontSize: RFValue(20),
        textAlign: 'center',
        color: '#333',
        fontWeight: '600',
    },
    game: {
        display: 'flex',
        backgroundColor: '#f6f8fb',
        flex: 1,
        padding: RFValue(18),
        borderRadius: RFValue(12),
    },
    gameBoard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: RFValue(16),
        padding: RFValue(12),
        backgroundColor: '#eef3ff',
        borderRadius: RFValue(14),
    },
    boardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    historico: {
        fontSize: RFValue(16),
        color: '#333',
    },
    input: {
        borderWidth: RFValue(1),
        borderColor: '#d7dff7',
        padding: RFValue(12),
        marginVertical: RFValue(6),
        borderRadius: RFValue(10),
        backgroundColor: 'snow',
    },
    btnVoltar: {
        backgroundColor: '#556cd6',
        padding: RFValue(12),
        marginTop: RFValue(20),
        borderRadius: RFValue(12),
        alignItems: 'center',
    },
    scoreRow: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: RFValue(10),
        paddingHorizontal: RFValue(6),
    },
    score: {
        fontSize: RFValue(14),
        marginVertical: RFValue(2),
        color: '#444',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: RFValue(10),
        marginBottom: RFValue(8),
    },
    playerLabel: {
        fontSize: RFValue(16),
        fontWeight: '700',
        color: '#222',
    },
    containerHistorico: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnReiniciar: {
        backgroundColor: '#556cd6',
        paddingVertical: RFValue(12),
        paddingHorizontal: RFValue(18),
        marginBottom: RFValue(12),
        borderRadius: RFValue(12),
        alignItems: 'center',
    },
});

export default style;