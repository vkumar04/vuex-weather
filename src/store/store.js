import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    zip: 28277,
    api: '686e3c91e813f64131d8583c81cb3738',
    weatherData: ''
  },
  getters: {
    getZip: state => {
      return state.zip
    },
    getApi: state => {
      return state.api
    },
    getWeather: state => {
      return state.weatherData
    }
  },
  mutations: {
    changeZip: (state, zip) => {
      state.zip = zip;
    },
    fetchWeather: (state) => {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${state.zip}&units=imperial&appid=${state.api}`)
      .then((response) => {
        return state.weatherData = response
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  actions: {
    changeZip: ({commit}, zip) => {
      commit('changeZip', zip)
    },
    weather: ({commit}) => {
     commit('fetchWeather') 
    }
  }
})