<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

defineProps({
    title:String,
    link:String
});

const handleClick = (url) =>{
    window.open(url, "_blank");
}
</script>
<template>
  <div
    @click="handleClick(link)"
    class="flex items-center justify-between w-full p-5 border-b cursor-pointer border-gold/35 group"
  >
    <p class="text-sm transition-all text-textWhite xl:text-base group-hover:ml-5">
      {{ title }}
    </p>
    <Icon class="w-5 h-5 text-white" icon="akar-icons:arrow-right" />
  </div>
</template>
