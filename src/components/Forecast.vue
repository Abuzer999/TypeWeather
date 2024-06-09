<script setup>
import WeatherList from './WeatherList.vue'
import { weatherIcons } from '../icon.bd'
import { ref, watch } from 'vue'

const props = defineProps({
  cityDataChild: Object
})

const daysOfWeek = (days) => {
  const date = new Date(days)
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return daysOfWeek[date.getDay()]
}

const itemsWeather = ref([])

const udateItems = () => {
  itemsWeather.value = [
    {
      imageUrl:
        weatherIcons[
          props.cityDataChild.forecast.forecastday[1].day.condition.text.trim().toLowerCase()
        ]?.day,
      textDate: 'Tomorrow',
      textWeather: `${props.cityDataChild.forecast.forecastday[1].day.condition.text}`,
      tempMax: `${props.cityDataChild.forecast.forecastday[1].day.maxtemp_c}ºc`,
      tempMin: `${props.cityDataChild.forecast.forecastday[1].day.mintemp_c}ºc`
    },
    {
      imageUrl:
        weatherIcons[
          props.cityDataChild.forecast.forecastday[2].day.condition.text.trim().toLowerCase()
        ]?.day,
      textDate: `${daysOfWeek(props.cityDataChild.forecast.forecastday[2].date)}`,
      textWeather: `${props.cityDataChild.forecast.forecastday[2].day.condition.text}`,
      tempMax: `${props.cityDataChild.forecast.forecastday[2].day.maxtemp_c}ºc`,
      tempMin: `${props.cityDataChild.forecast.forecastday[2].day.mintemp_c}ºc`
    },
    {
      imageUrl:
        weatherIcons[
          props.cityDataChild.forecast.forecastday[3].day.condition.text.trim().toLowerCase()
        ]?.day,
      textDate: `${daysOfWeek(props.cityDataChild.forecast.forecastday[3].date)}`,
      textWeather: `${props.cityDataChild.forecast.forecastday[3].day.condition.text}`,
      tempMax: `${props.cityDataChild.forecast.forecastday[3].day.maxtemp_c}ºc`,
      tempMin: `${props.cityDataChild.forecast.forecastday[3].day.mintemp_c}ºc`
    },
    {
      imageUrl:
        weatherIcons[
          props.cityDataChild.forecast.forecastday[4].day.condition.text.trim().toLowerCase()
        ]?.day,
      textDate: `${daysOfWeek(props.cityDataChild.forecast.forecastday[4].date)}`,
      textWeather: `${props.cityDataChild.forecast.forecastday[4].day.condition.text}`,
      tempMax: `${props.cityDataChild.forecast.forecastday[4].day.maxtemp_c}ºc`,
      tempMin: `${props.cityDataChild.forecast.forecastday[4].day.mintemp_c}ºc`
    },
    {
      imageUrl:
        weatherIcons[
          props.cityDataChild.forecast.forecastday[5].day.condition.text.trim().toLowerCase()
        ]?.day,
      textDate: `${daysOfWeek(props.cityDataChild.forecast.forecastday[5].date)}`,
      textWeather: `${props.cityDataChild.forecast.forecastday[5].day.condition.text}`,
      tempMax: `${props.cityDataChild.forecast.forecastday[5].day.maxtemp_c}ºc`,
      tempMin: `${props.cityDataChild.forecast.forecastday[5].day.mintemp_c}ºc`
    }
  ]
}

watch(() => props.cityDataChild, udateItems, { immediate: true })
</script>

<template>
  <div
    class="bg-[#16161f] rounded-[12px] px-forecastY py-forecastX col-start-2 col-end-3 row-start-2 row-end-3 wl:col-start-1 wl:col-end-3 wl:row-start-2 wl:row-end-3 ws:col-start-1 ws:col-end-2 ws:row-start-3 ws:row-end-4"
  >
    <p class="text-[16px] leading-[140%] text-[#7f7f98] font-[400] mb-[20px] ws:hidden">
      Forecast for 5 days
    </p>

    <div class="flex gap-[1px] wl:justify-between ws:justify-start">
      <WeatherList
        v-for="(itemWeather, id) in itemsWeather"
        :key="id"
        :imageUrl="itemWeather.imageUrl"
        :textDate="itemWeather.textDate"
        :textWeather="itemWeather.textWeather"
        :tempMax="itemWeather.tempMax"
        :tempMin="itemWeather.tempMin"
      />
    </div>
  </div>
</template>
