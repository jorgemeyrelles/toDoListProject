import axios from 'axios';
const url = 'http://localhost:3001/';

export function getAllTasks() {
  return axios.get(url + "home");
};

export function addTask(value) {
  return axios.post(url + "home", value);
}
