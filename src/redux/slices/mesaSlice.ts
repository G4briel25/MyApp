import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mesaService from '../../services/mesaService';
import { Mesa } from '../../types';

interface MesaState {
  data: Mesa[];
  loading: boolean;
  error: string | null;
}

const initialState: MesaState = {
  data: [],
  loading: false,
  error: null
};

export const fetchMesas = createAsyncThunk(
  'mesas/fetchMesas',
  async ({ page, perPage, isLoadMore = false }: { 
    page: number; 
    perPage: number; 
    isLoadMore?: boolean;
  }) => {
    const response = await mesaService.getMesasAll(page, perPage);
    return {
      data: response.data,
      pagination: response.pagination,
      isLoadMore
    };
  }
);

const mesaSlice = createSlice({
  name: 'mesas',
  initialState,
  reducers: {
    setMesas: (state, action) => {
      state.data = action.payload;
    },
    // Adicionar ação para limpar dados quando necessário
    clearMesas: (state) => {
      state.data = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMesas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMesas.fulfilled, (state, action) => {
        state.loading = false;
        
        // Se é loadMore, adiciona aos dados existentes
        // Se não é loadMore (refresh/primeira carga), substitui os dados
        if (action.payload.isLoadMore) {
          state.data = [...state.data, ...action.payload.data];
        } else {
          state.data = action.payload.data;
        }
      })
      .addCase(fetchMesas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao carregar mesas';
      });
  }
});

export const { setMesas, clearMesas } = mesaSlice.actions;
export default mesaSlice.reducer;