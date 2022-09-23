<template>
<button 
  class="w-40 h-14 m-7 p-5 text-lg leading-none text-cloud text-center rounded-[5px] btn-shading-bn" 
  :class="isActive ? 
  ['bg-midnight', 'cursor-pointer'] :
  ['bg-mist','cursor-not-allowed']" 
  :disabled="!isActive" 
  @click="emit('click')"
>
 <slot></slot>
</button>
</template>

<script setup>
const {isActive} = defineProps({
  isActive:{
    type:Boolean,
    required: true
  }
})
const emit=defineEmits([
  'click'
])
</script>

<style lang="scss" scoped>

</style>