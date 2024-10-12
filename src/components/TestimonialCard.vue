<script setup>
defineProps({
  img: String,
  name: String,
  desc: String,
  rate: Number,
});

import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
<template>
  <div
    class="flex flex-col flex-shrink-0 gap-5 p-3 border shadow-md w-80 md:w-96 border-gold rounded-xl snap-center"
  >
    <div
      class="w-full rounded-lg h-52"
      :style="{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    ></div>

    <p class="text-lg font-medium text-textWhite">
      {{ name }}
    </p>

    <p class="text-sm font-normal text-justify text-textWhite line-clamp-4">
      {{ desc }}
    </p>

    <div class="flex gap-3 m-3">
      <Icon
        v-for="n in rate"
        :key="n"
        icon="material-symbols:star-rate-rounded"
        class="scale-150 text-amber-500"
      />
    </div>
  </div>
</template>
