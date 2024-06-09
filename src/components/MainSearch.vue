<script setup>
import Search from './Search.vue'
import { ref } from 'vue'

const selectedCity = ref('')

const emit = defineEmits(['update-cityMain', 'update-error'])

const props = defineProps({
  cityDataMain: Object,
  error: Boolean,
  isLoading: Boolean
})

const updateError = () => {
  emit('update-error', false)
}

const updateCity = (city) => {
  selectedCity.value = city
  emit('update-cityMain', city)
}
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-[48px]">
    <div>
      <img src="/main/logo.svg" alt="logo" />
    </div>

    <div class="mt-[18vh] flex flex-col items-center text-center max-w-[600px] w-full">
      <h1 class="font-[700] text-title text-[#fafafa] leading-[140%]">
        Welcome to <span class="text-[#8fb2f5]">TypeWeather</span>
      </h1>
      <p class="max-w-max w-full mt-[8px] mb-[6vh] font-[400] text-text text-[#bfbfd4] leading-[140%]">
        Select a location to check the weather forecast.
      </p>

      <Search
        @update-city="updateCity"
        @update-error="updateError"
        :cityDataChild="props.cityDataMain"
        :isLoading="props.isLoading"
        :error="props.error"
        :completed="props.completed"
      />
    </div>
  </div>
</template>
