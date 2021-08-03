import axios from 'axios';
import { get } from 'config';

class BtcService {
  static async getPrice({ coins }) {
    const { data: { bpi: { UAH } } } = await axios.get(get('btcApi'));

    return {
      btcValue: +coins,
      rate: +coins * UAH.rate_float,
    };
  }
}

export default BtcService;