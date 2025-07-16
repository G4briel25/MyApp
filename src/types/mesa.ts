export interface Mesa {
    id: string | number;
    nome: string;
    tempo: string;
    valor: string;
    servico: string;
}

export interface CardMesaProps {
    mesa: Mesa;
}