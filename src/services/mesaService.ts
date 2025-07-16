import axios from 'axios';

const mesaService = {
    getMesasAll: async () => {
        try {
            const API_MESA_URL = `http://localhost:3000/mesas`;
            const response = await axios.get(API_MESA_URL);
            return response.data;
        } catch (error) {
            console.log('Erro ao buscar mesas: ', error);
            throw new Error('Não foi possível carregar as mesas.');
        }
    }
}

export default mesaService;