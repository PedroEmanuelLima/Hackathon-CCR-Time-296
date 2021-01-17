import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export function fetchvagas() {
    return axios(`${API_URL}/vagas`);
}

export function fetchMentores() {
    return axios(`${API_URL}/mentores`);
}