import axios from 'axios';
import { parsedEnv } from '../../env';

export const api = axios.create({
  baseURL: parsedEnv.VITE_API_URL,
});
