import axios from 'axios';

const mesaService = {
    getMesasAll: async (page: number, perPage: number = 10) => {
        try {
            const API_MESA_URL = `http://192.168.11.224:3000/mesas?_page=${page}&_per_page=${perPage}`;
            const response = await axios.get(API_MESA_URL);
            
            return {
                data: response.data.data,
                pagination: {
                    currentPage: response.data.first,
                    nextPage: response.data.next,
                    previousPage: response.data.prev,
                    lastPage: response.data.last,
                    totalPages: response.data.pages,
                    totalItems: response.data.items,
                    hasMore: response.data.next !== null
                }
            };
        } catch (error) {
            console.log('Erro ao buscar mesas: ', error);
            throw new Error('Não foi possível carregar as mesas.');
        }
    }
};

export default mesaService;