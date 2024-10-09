<script setup>

defineProps({
  img: String,
  alt:String
});

</script>
<template>
  <div class="flex justify-center flex-shrink-0 w-full snap-center">
    <img :src="img" class="w-3/4 h-auto md:w-1/2 xl:w-3/4" alt="Aero Black" />
  </div>
</template>
