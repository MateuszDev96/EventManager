import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const instance = axios.create({
  baseURL: '/api/v1/'
})

export const mock = new MockAdapter(instance)