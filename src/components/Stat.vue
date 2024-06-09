<script setup>
defineProps({
  imageUrl: String,
  text: String,
  value: String
})
</script>

<template>
  <div
    class="flex justify-between items-center py-[16px] border-b-[1px] border-solid border-[#1c1c27] last:pb-[0] last:border-b-0 ws:first:pt-0"
  >
    <div class="flex items-center gap-[12px]">
      <img :src="imageUrl" alt="icon" class="w-[32px] h-[25px]" />
      <p class="text-[#bfbfd4] text-[14px] font-[700] leading-[140%]">{{ text }}</p>
    </div>
    <span class="text-[#fafafa] text-temps font-[700] leading-[140%]">{{ value }}</span>
  </div>
</template>
