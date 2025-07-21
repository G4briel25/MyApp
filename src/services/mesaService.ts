import axios from 'axios';


// IP da sua da máquina
const LOCAL_IP = '192.168.11.224';
const ANDROID_IP = '10.0.2.2'; // IP do android para caso se estiver usando o emulador Android Studio

const mesaService = {
    getMesasAll: async (page: number, perPage: number = 20) => {
        try {

            //const API_MESA_URL = `http://${ANDROID_IP}:3000/mesas?_page=${page}&_per_page=${perPage}`;
            const API_MESA_URL = `http://${LOCAL_IP}:3000/mesas?_page=${page}&_per_page=${perPage}`;
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
        } catch (error: any) {
            console.log('Erro ao buscar mesas: ', error.message);
            if (error.response) {
                console.log('Status:', error.response.status);
                console.log('Data:', error.response.data);
            }
            throw new Error('Não foi possível carregar as mesas.');
        }
    }
};

export default mesaService;