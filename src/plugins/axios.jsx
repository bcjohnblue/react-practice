import axios from 'axios';

const callRoomAPI = (() => {
  const config = {
    baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer urSp1BPggFs49WnKgSZtQYCxmTlxDVIJfDhS8MssjjHSHixJNOKh93R9jEX3'
    }
  };

  return axios.create(config);
})();

export default {
  callRoomAPI
};
