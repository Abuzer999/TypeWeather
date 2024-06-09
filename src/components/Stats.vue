<script setup>
import Stat from './Stat.vue'
import { watch, ref } from 'vue'

const props = defineProps({
  cityDataChild: Object
})

const items = ref([])

const updateItems = () => {
  items.value = [
    {
      imageUrl: '/icon/temp.svg',
      text: 'Real Feel',
      value: `${props.cityDataChild.current.feelslike_c} ºc`
    },
    {
      imageUrl: '/icon/rain.svg',
      text: 'Chance of Rain',
      value: `${
        props.cityDataChild?.forecast?.forecastday[0].hour[
          props.cityDataChild?.current?.last_updated.slice(11, -3).replace(/^0/, '')
        ]?.chance_of_rain
      } %`
    },
    {
      imageUrl: '/icon/wind.svg',
      text: 'Wind',
      value: `${props.cityDataChild.current.wind_kph} km/h`
    },
    {
      imageUrl: '/icon/water.svg',
      text: 'Humidity',
      value: `${props.cityDataChild.current.humidity} %`
    },
    { imageUrl: '/icon/sun.svg', text: 'UV index', value: `${props.cityDataChild.current.uv}` }
  ]
}

watch(() => props.cityDataChild, updateItems, { immediate: true })
</script>

<template>
  <div
    class="px-[24px] py-stats bg-[#16161f] rounded-[12px] col-start-2 col-end-3 row-start-1 row-end-2 wl:col-start-2 wl:col-end-3 wl:row-start-1 wl:row-end-2 ws:col-start-1 ws:col-end-2 ws:row-start-2 ws:row-end-3"
  >
    <p class="text-[#7f7f98] text-[16px] font-[400] leading-[140%] mb-[20px] ws:hidden">
      Weather details today
    </p>
    <div>
      <Stat
        v-for="(item, id) in items"
        :key="id"
        :imageUrl="item.imageUrl"
        :text="item.text"
        :value="item.value"
      />
    </div>
  </div>
</template>
