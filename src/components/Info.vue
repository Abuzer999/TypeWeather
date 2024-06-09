<script setup>
import { computed } from 'vue'
import { weatherIcons } from '../icon.bd'
const props = defineProps({
  cityDataInfo: Object
})
const daysOfWeek = (days) => {
  const date = new Date(days)
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return daysOfWeek[date.getDay()]
}

const monthOfWeek = (month) => {
  const date = new Date(month)
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return monthsOfYear[date.getMonth()]
}

const getTimeOfDay = (localTime) => {
  const hour = new Date(localTime).getHours()
  return hour >= 6 && hour < 18 ? 'day' : 'night'
}

const getWeatherIcon = (condition, localTime) => {
  const timeOfDay = getTimeOfDay(localTime)
  return weatherIcons[condition]?.[timeOfDay]
}

const getBackgroundImage = (condition, localTime) => {
  const timeOfDay = getTimeOfDay(localTime)
  return weatherIcons[condition]?.[`background${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}`]
}

const currentWeatherIcon = computed(() => {
  const condition = props.cityDataInfo.current.condition.text.trim().toLowerCase()
  const localTime = props.cityDataInfo.location.localtime
  return getWeatherIcon(condition, localTime)

})

const backgroundStyle = computed(() => {
  const condition = props.cityDataInfo.current.condition.text.trim().toLowerCase()
  const localTime = props.cityDataInfo.location.localtime
  const backgroundUrl = getBackgroundImage(condition, localTime)

  return {
    backgroundImage: `url(${backgroundUrl})`
  }
  
})
</script>

ScriptCompileContext

<template>
  <div
    class="relative flex flex-col h-full px-info py-info bg-no-repeat bg-cover rounded-[8px]"
    :style="backgroundStyle"
  >
    <div class="flex justify-between gap-[10px] items-start">
      <div>
        <h2 class="max-w-[370px] ws:max-w-[320px] w-full text-location text-[#fafafa] font-[700] leading-[140%]">
          <span>{{ props.cityDataInfo.location.country }},</span> <span class="ws:hidden">{{ props.cityDataInfo.location.region }},</span>
          <span>{{ props.cityDataInfo.location.name }}</span>
        </h2>
        <p class="mt-[8px] text-[16px] text-[#fafafa] font-[400] leading-[140%]">
          {{ daysOfWeek(props.cityDataInfo.location.localtime) }},
          {{ props.cityDataInfo.location.localtime.slice(8, 10) }}
          {{ monthOfWeek(props.cityDataInfo.location.localtime) }}
          {{ props.cityDataInfo.location.localtime.slice(0, 4) }}
        </p>
      </div>

      <span class="text-time text-[#fafafa] font-[700] leading-[140%]">{{
        props.cityDataInfo.location.localtime.slice(11, 16)
      }}</span>
    </div>

    <div class="relative flex items-end mt-auto">
      <div>
        <span class="text-temp text-[#fff] font-[800] leading-[100%]"
          >{{ props.cityDataInfo.current.temp_c }}ºc</span
        >
        <div class="mt-[12px] flex items-center gap-[12px] ws:flex-col ws:gap-0 ws:items-start">
          <span class="text-temps text-[#fff] font-[700] leading-[140%]"
            >{{ props.cityDataInfo.forecast.forecastday[0].day.maxtemp_c }}ºc /
            {{ props.cityDataInfo.forecast.forecastday[0].day.mintemp_c }}ºc
          </span>
          <span class="rounded-full bg-[#fff] w-[8px] h-[8px] ws:hidden"></span>
          <p class="text-weather text-[#fff] font-[400] leading-[140%]">
            {{ props.cityDataInfo.current.condition.text }}
          </p>
        </div>
      </div>

      <img
        class="absolute -right-[42px] w-image h-image z-0"
        :src="currentWeatherIcon"
        alt="Weather Icon"
      />
    </div>
  </div>
</template>
