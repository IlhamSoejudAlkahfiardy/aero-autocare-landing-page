<script setup>
defineProps({
  text: String,
  link: String,
});

import { Icon } from "@iconify/vue/dist/iconify.js";

const handleClick = (url) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div>
    <button
      @click="handleClick(link)"
      class="flex items-center justify-between gap-12 px-6 py-3 transition-all bg-transparent border-b shadow-md w-72 border-gold/35 hover:bg-lightBlack"
    >
      <p class="text-xs font-light tracking-wider text-zinc-100">{{ text }}</p>
      <Icon class="w-4 h-4 text-white" icon="akar-icons:arrow-right" />
    </button>
  </div>
</template>
