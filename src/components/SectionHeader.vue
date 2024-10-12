<script setup>
defineProps({
  title:String
});
</script>
<template>
  <div class="justify-center w-full">
    <h1 class="text-3xl font-normal text-center playwrite-au-sa-font text-lightGold lg:text-4xl">
        {{ title }}
    </h1>
  </div>
</template>
