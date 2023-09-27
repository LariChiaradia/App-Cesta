import React from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import Texto from '../../components/texto';
import Botao from './components/Botao';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Topo from './components/Topo';

const width = Dimensions.get('screen').width;

export default function Cesta({ topo, detalhes, botao, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtrator={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Botao {...botao} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});