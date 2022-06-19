import fetch from 'node-fetch';
import urls from '../config/urls';

/*
* @param { get } Получить список пользователей
* @param {object} Создание пользователя
*/
const Customers = {
  getAir: async () => {
    const r = await fetch(urls.airport + 'api/airports?', { method: 'GET' });
    return r;
  },
  postNewAir: async (header) => {
    const params = new URLSearchParams();
    params.append('airport_id', 'SIJ');
    const r = await fetch(urls.airport + 'api/favorites', { method: 'POST', headers: header, body: params });
    return r;
  },
  getFavAir: async (header) => {
    const r = await fetch(urls.airport + 'api/favorites', { method: 'GET', headers: header });
    return r;
  },
  getAirDistanse: async (header) => {
    const params = new URLSearchParams();
    params.append('from', 'SIJ');
    params.append('to', 'GKA');
    const r = await fetch(urls.airport + 'api/airports/distance', { method: 'POST', headers: header, body: params });
    return r;
  },
};

export default Customers;