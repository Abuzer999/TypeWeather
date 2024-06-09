<script setup>
defineProps({
  textDate: String,
  textWeather: String,
  imageUrl: String,
  tempMax: String,
  tempMin: String
})
</script>

ScriptCompileContext

<template>
  <div class="flex flex-col items-center w-[116px] py-weather h-900:py-0">
    <p class="text-[16px] leading-[140%] text-[#bfbfd4] font-[700] ws:hidden">{{ textDate }}</p>
    <p class="hidden text-[16px] leading-[140%] text-[#bfbfd4] font-[700] ws:block">{{ textDate.slice(0, 3) }}</p>

    <img :src="imageUrl" alt="icon" class="mt-[12px] h-[68px] w-[68px] ws:mt-0" />

    <span
      class="mt-[12px] mb-[4px] text-[16px] text-center leading-[140%] text-[#bfbfd4] font-[400] ws:hidden"
      >{{ textWeather }}</span
    >

    <div class="flex gap-[8px] mt-auto ws:flex-col ws:gap-0">
      <span class="text-[16px] leading-[140%] text-[#fafafa] font-[700]">{{ tempMax }}</span>
      <span class="text-[16px] leading-[140%] text-[#7f7f98] font-[700]">{{ tempMin }}</span>
    </div>
  </div>
</template>
