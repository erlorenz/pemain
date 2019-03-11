import axios from 'axios';
import axiosError from '../../utils/axiosError';

const dbTransaction = async dataToSubmit => {
  try {
    const response = await axios.post(
      process.env.API_URL + '/checkout/dbtransaction',
      dataToSubmit,
    );

    console.log('[DB Response]', response.data);
    return response.data;
  } catch (e) {
    return axiosError(e, 'DB Response');
  }
};

export default dbTransaction;
