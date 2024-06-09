<script setup>
import { ref, watch } from 'vue'
import { ExclamationCircleIcon } from '@heroicons/vue/24/solid'
const inpValue = ref('')
const emit = defineEmits(['update-city', 'update-error'])

const submitForm = () => {
  emit('update-city', inpValue.value)

}

const props = defineProps({
  cityDataChild: Object,
  error: Boolean,
  isLoading: Boolean
})

const errorUpdate = () => {
  emit('update-error', false)

}

watch(() => props.cityDataChild, (newVal) => {
  if (newVal) {
    inpValue.value = ''
  }
})

</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="relative w-full flex justify-between rounded-[8px] py-[20px] px-[20px] bg-[#1e1e29]"
  >
    <input
      class="w-full font-[400] text-[16px] text-[#fafafa] leading-[140%] pr-[32px]"
      type="text"
      placeholder="Porto Alegre, RS, Brazil."
      v-model="inpValue"
      @input="errorUpdate"
    />
    <div v-if="props.isLoading" class="line-spinner">
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
      <div class="line-spinner__line"></div>
    </div>

    <div v-else-if="props.error" class="absolute top-[10px] right-[6px]">
      <ExclamationCircleIcon
        class="relative w-[40px] fill-[#8fb2f5]"
      />
    </div>
  </form>
</template>
