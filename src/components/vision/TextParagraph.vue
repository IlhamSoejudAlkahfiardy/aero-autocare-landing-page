<script setup>
defineProps({
  text: String,
});
</script>
<template>
  <p class="text-sm text-justify xl:text-base text-textWhite">{{ text }} </p>
</template>
