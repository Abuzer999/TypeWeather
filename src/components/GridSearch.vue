<script setup>
import Search from './Search.vue'
import Info from './Info.vue'
import { ref } from 'vue'
const selectedCity = ref('')
const emit = defineEmits(['update-city', 'update-error'])

const updateCity = (city) => {
  selectedCity.value = city
  emit('update-city', city)
}

const updateError = () => {
  emit('update-error', false)
}

const props = defineProps({
  cityDataChild: Object,
  isLoading: Boolean,
  error: Boolean
})
</script>

<template>
  <div
    class="flex flex-col gap-[16px] bg-[#16161f] rounded-[12px] px-[16px] py-[16px] w-full col-start-1 col-end-2 row-start-1 row-end-3 wl:col-start-1 wl:col-end-2 wl:row-start-1 wl:row-end-2 ws:col-start-1 ws:col-end-2 ws:row-start-1 ws:row-end-2"
  >
    <div class="flex gap-[12px]">
      <div class="flex items-center rounded-[8px] py-[8px] px-[15px] bg-[#1e1e29]">
        <img src="/grid/logo.svg" alt="logo" />
      </div>

      <Search
        @update-city="updateCity"
        @update-error="updateError"
        :error="error"
        :isLoading="isLoading"
        :cityDataChild="props.cityDataChild"
      />
    </div>

    <Info :cityDataInfo="props.cityDataChild" />
  </div>
</template>
