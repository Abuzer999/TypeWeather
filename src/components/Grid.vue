<script setup>
import GridSearch from './GridSearch.vue'
import Stats from './Stats.vue'
import Forecast from './Forecast.vue'

import { ref } from 'vue'
const selectedCity = ref('')
const emit = defineEmits(['update-cityGrid', 'update-error'])

const updateCity = (city) => {
  selectedCity.value = city
  emit('update-cityGrid', city)
}
const updateError = () => {
  emit('update-error', false)
}

const props = defineProps({
  cityDataMain: Object,
  error: Boolean,
  isLoading: Boolean
})
</script>

<template>
  <div
    class="grid grid-cols-2 gap-x-[24px] gap-y-[16px] wl:grid-cols-[550px_300px] ws:grid-cols-1 ws:grid-rows-[97vh_310px_180px] ws:py-[10px] h-900:py-0 h-900:grid-rows-[40vh_300px_160px]"
  >
    <Transition>
      <GridSearch
        v-if="props.cityDataMain"
        :cityDataChild="props.cityDataMain"
        @update-city="updateCity"
        @update-error="updateError"
        :error="error"
        :isLoading="isLoading"
      />
    </Transition>

    <Transition>
      <Stats
        v-if="props.cityDataMain"
        :cityDataChild="props.cityDataMain"
        :key="props.cityDataMain"
      />
    </Transition>

    <Transition>
      <Forecast
        v-if="props.cityDataMain"
        :cityDataChild="props.cityDataMain"
        :key="props.cityDataMain"
      />
    </Transition>
  </div>
</template>
