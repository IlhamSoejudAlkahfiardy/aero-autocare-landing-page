<script setup>
import Container from "../components/Container.vue";
import DividerSection from "../components/DividerSection.vue";
import SectionHeader from "../components/SectionHeader.vue";
import TestimonialCard from "../components/TestimonialCard.vue";

import testimonialData from "../assets/data/testimonials";

// import { Icon } from "@iconify/vue/dist/iconify.js";

import { ref } from "vue";

const containerRef = ref(null);

const handleNext = () => {
  if (containerRef.value && containerRef.value.firstChild) {
    const itemWidth = containerRef.value.firstChild.clientWidth;
    containerRef.value.scrollBy({
      left: itemWidth,
      behavior: "smooth",
    });
  }
};

// Fungsi untuk menggeser ke item sebelumnya
const handlePrev = () => {
  if (containerRef.value && containerRef.value.firstChild) {
    const itemWidth = containerRef.value.firstChild.clientWidth;
    containerRef.value.scrollBy({
      left: -itemWidth,
      behavior: "smooth",
    });
  }
};
</script>
<template>
  <Container>
    <div class="flex flex-col gap-6 mx-auto">
      <SectionHeader title="Apa Kata Mereka?" />
      <div class="flex justify-center w-full">
        <DividerSection />
      </div>

      <div class="relative flex items-center w-full">
        <!-- <div
          @click="handlePrev"
          class="absolute left-0 w-10 h-10 bg-black border rounded-lg md:left-5 border-gold"
        >
          <Icon
            icon="material-symbols:arrow-left"
            class="w-full h-auto text-lightGold"
          />
        </div>

        <div
          @click="handleNext"
          class="absolute right-0 w-10 h-10 bg-black border rounded-lg md:right-5 border-gold"
        >
          <Icon
            icon="material-symbols:arrow-right"
            class="w-full h-auto text-lightGold"
          />
        </div> -->
        <div
          ref="containerRef"
          class="flex w-full gap-12 px-12 m-auto mt-10 overflow-x-auto overflow-y-hidden md:gap-24 md:px-24 snap-x snap-mandatory no-scrollbar"
        >
          <TestimonialCard
            v-for="(testimonial, index) in testimonialData"
            :key="index"
            :img="testimonial.img"
            :name="testimonial.name"
            :desc="testimonial.desc"
            :rate="testimonial.rate"
          />
        </div>
      </div>
    </div>
  </Container>
</template>
