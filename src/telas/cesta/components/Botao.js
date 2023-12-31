import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../../../components/texto';

export default function Botao({ texto, onPress, style }) {
    return <TouchableOpacity style={[estilos.botao, style]} onPress={() => { }}>
        <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
        marginTop: 10,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});