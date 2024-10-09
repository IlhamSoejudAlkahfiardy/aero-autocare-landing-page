<script setup>
defineProps({
  text: String,
  link: String,
});

const handleClick = (url) => {
  window.open(url, "_blank");
};
</script>

<template>
  <div>
    <button
      @click="handleClick(link)"
      class="flex px-10 py-3 transition-colors rounded-full shadow-md bg-gold w-fit hover:bg-hoverGold"
    >
      <p class="text-zinc-100">{{ text }}</p>
    </button>
  </div>
</template>
