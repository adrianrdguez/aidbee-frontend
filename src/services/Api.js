import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async signup (newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },

  async login (user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },

  async createHelp (newHelp) {
    const response = await API.post('/me/helps', {
      ...newHelp
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },

  async getHelps (query = false) {
    const options = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    if (query) {
      options.me = true
    }
    const response = await API.get('/me/helps/', options)
    return response.data
  },

  async deleteHelpById (helpId) {
    const response = await API.delete(`/me/helps/${helpId}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },

  async getHelpById (helpId) {
    const response = await API.get(`/me/helps/${helpId}`,
      {
        headers: {
          token: localStorage.getItem('token')
        }
      })
    return response.data
  },

  async updateHelpById (helpId, helpUp) {
    const response = await API.put(`/me/helps/${helpId}`, {
      ...helpUp
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  }
}
