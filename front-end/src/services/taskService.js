import axios from 'axios';
const url = 'http://localhost:3001/home';

export function getAllTasks() {
  return axios.get(url);
};

export function addTask(value) {
  return axios.post(url);
}
