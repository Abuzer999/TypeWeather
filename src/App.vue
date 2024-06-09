<script setup>
import MainSearch from './components/MainSearch.vue'
import Grid from './components/Grid.vue'
import axios from 'axios'
import { ref } from 'vue'

const city = ref('')
const cityData = ref(null)
const showMainSearch = ref(true)
const showGrid = ref(false)
let canClick = ref(true)
const isLoading = ref(false)
const error = ref(false)


const getCity = async (city) => {
  try {
    error.value = false
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_APP}&q=${city}&days=6&aqi=yes&alerts=yes`
    )
    cityData.value = response.data
    showMainSearch.value = false
    showGrid.value = true
    document.body.classList.add('center')
  } catch (err) {
    console.warn(err, 'City is not found')
    error.value = true
  } finally {
    isLoading.value = false
  }
}

const updateCity = (newCity) => {
  if (canClick.value) {
    isLoading.value = true
    canClick.value = false
    setTimeout(() => {
      canClick.value = true
    }, 500)
    city.value = newCity
    getCity(newCity)
  }
}

const updateError = () => {
  error.value = false
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <MainSearch
        v-if="showMainSearch"
        @update-cityMain="updateCity"
        @update-error="updateError"
        :cityDataMain="cityData"
        :isLoading="isLoading"
        :error="error"
      />

      <Grid
        v-show="showGrid"
        :cityDataMain="cityData"
        @update-error="updateError"
        @update-cityGrid="updateCity"
        :error="error"
        :isLoading="isLoading"
      />
    </div>
  </div>
</template>
