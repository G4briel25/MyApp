import { Mesa } from './mesa';

export type TipoFiltro = 
    | 'Visão Geral'
    | 'Em atendimento'
    | 'Ociosas'
    | 'Disponíveis'
    | 'Sem pedidos'
    | 'Meus atendimentos';

export interface MapaAtendimentoState {
    activeButton: TipoFiltro;
    mesas: Mesa[];
    searchQuery: string;
}

export interface FlatListRenderProps<T> {
    item: T;
    index: number;
}

export interface ButtonRenderProps extends FlatListRenderProps<string> {}

export interface CardRenderProps extends FlatListRenderProps<Mesa> {}