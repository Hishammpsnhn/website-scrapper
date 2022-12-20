import axios from 'axios';
const url = "http://localhost:8000"
export const allInsights = () => axios.get(`${url}/api/url`)
export const getInsight = (data) => axios.post(`${url}/api/url`, data);
export const updateInsight = (id,data) => axios.patch(`${url}/api/url/${id}/update`,data);
export const deleteInsight = (id) => axios.delete(`${url}/api/url/${id}/delete`);
