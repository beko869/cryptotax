import apiClient from './ApiClient';

class TransactionDataService {
  findAll = () => {
    return apiClient.get('/transactions');
  };
}

export default new TransactionDataService();
