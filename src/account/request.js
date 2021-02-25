import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://thinkingme.xyz:44300',
    // baseURL: 'http://localhost:5000',
    timeout: 5000
  })
  return instance(config)
}
