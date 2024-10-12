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
      class="flex px-10 py-3 transition-all bg-transparent border rounded shadow-md border-gold/35 w-fit hover:bg-lightBlack"
    >
      <p class="text-xs tracking-wider text-lightGold">{{ text }}</p>
    </button>
  </div>
</template>
