<script setup>

</script>
<template>
  <div :class="['mx-auto w-full py-32', $attrs.class]">
    <div :class="['container mx-auto px-3 md:px-5 lg:px-16 xl:px-0', $attrs.class]">
        <slot />
    </div>
  </div>
</template>
