import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID LIRK5D_94PGcB-Ws7QxkP1rbFObECmMChNwvCs_FKMY'
  }
});