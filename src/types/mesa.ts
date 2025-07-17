export interface Mesa {
  id: number;
  numero: number;
  status: 'ocupada' | 'livre' | 'reservada';
  cliente: string | null;  // Nome ou número de clientes
  numeroClientes: number;
  numeroComandas: number;
  tempoEmAberto: number; // Em minutos
  atendente: string | null;
  valorTotal: number;
  cor: 'verde' | 'vermelho' | 'amarelo' | 'branco';
  ultimoPedido: string | null;
}

export interface CardMesaProps {
    mesa: Mesa;
}