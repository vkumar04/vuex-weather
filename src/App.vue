<template>
  <div id="app">
    <p>weather for: </p>
    <input type="text" placeholder="zip code" v-model="zip" @keyup.13="weather">
    <h3>Zip: {{zip}}</h3>
      <ul v-for="temp in getWeather.data.list" :key="temp.weather.id">
        <li>{{temp.main.temp}} F</li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    zip: {
      get() {
        return this.$store.getters.getZip;
      },
      set(zip) {
        return this.$store.dispatch('changeZip', zip)
      }
    },
    ...mapGetters([
      'getWeather',
      'getApi'
    ]),
    ...mapActions([
      'weather'
    ])
  },
  created() {
    this.weather
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
