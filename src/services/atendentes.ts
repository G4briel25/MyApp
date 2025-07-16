import axios from 'axios';

const atendenteService = {
    getAtendenteAll: async () => {
        try {
            const API_ATENDENTE_URL = `http://localhost:3000/atendentes`;
            const response = await axios.get(API_ATENDENTE_URL);
            return response.data;
        } catch (error) {
            console.log('Erro ao buscar atendentes: ', error);
            throw new Error('Não foi possível carregar os atendentes.');
        }
    }
}

export default atendenteService;