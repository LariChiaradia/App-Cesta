import pepino from '../../assets/frutas/Abobora.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Pepino.png';
import { default as abobora, default as tomate } from '../../assets/frutas/Tomate.png';
import logo from '../../assets/logo.png';


const cesta = {
    topo: {
        titulo: "Detalhe Da Cesta",
    },
    detalhes: {
        nome: "Cesta De Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
        preco: "R$ 30,00",
    },
    botao: {
        texto: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brocolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abobora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;