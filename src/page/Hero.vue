<script setup>
import AeroBlack from "../assets/image/aero-black.png";
import ToneUp from "../assets/image/tone-up.png";
import Button from "../components/Button.vue";
import Image from "../components/Image.vue";
import { useMotion } from "@vueuse/motion";

// heroicon
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";

const containerRef = ref(null);

const handleNext = () => {
  const itemWidth = containerRef.value.firstChild.clientWidth;
  containerRef.value.scrollBy({
    left: itemWidth,
    behavior: "smooth",
  });
};

// Fungsi untuk menggeser ke item sebelumnya
const handlePrev = () => {
  const itemWidth = containerRef.value.firstChild.clientWidth;
  containerRef.value.scrollBy({
    left: -itemWidth,
    behavior: "smooth",
  });
};

// onMounted(() => {
//   const animation = animate(".test-animation", {scale:1.5},{
//     duration:1,
//     easing:spring(),
//     repeat:Infinity,
//     direction:"alternate"
//   })
// })
</script>

<template>
  <div class="flex items-center w-full min-h-screen">
    <div class="container px-3 mx-auto my-32 md:px-5 lg:px-16">
      <div class="flex flex-col w-full gap-12 2xl:gap-0">
        <!-- headline -->
        <div
          class="flex flex-col items-center test-animation xl:gap-12 xl:flex-row"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: 150,
                damping: 50,
                mass: 0.5,
              },
            }"
            :duration="900"
            class="flex flex-col w-full gap-6 xl:w-3/4 2xl:w-1/2 lg:gap-12"
          >
            <div class="flex flex-col gap-3 lg:gap-6">
              <h2
                class="text-3xl font-normal text-center xl:text-left text-gradient lg:text-4xl"
              >
                PT Aero Group Indonesia
              </h2>
              <div class="w-16 h-1 mx-auto xl:mx-0 xl:w-24 bg-gold" />
              <h1
                class="text-3xl font-bold text-center xl:text-left text-gradient lg:text-4xl drop-shadow-md"
              >
                Skincare & Perawatan Kendaraan Terbaik di TikTok & Shopee
              </h1>
            </div>
            <p
              class="text-lg font-light text-center xl:text-left text-zinc-100 lg:text-xl !leading-loose"
            >
              Temukan produk skincare premium dari Mooi & Epidermia, serta
              solusi perawatan kendaraan dari Aero Autocare, yang semuanya bisa
              dibeli dengan mudah di TikTok dan Shopee
            </p>
          </div>

          <!-- produk -->
          <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 150,
              damping: 50,
              mass: 0.5,
            },
          }"
          :duration="900"
          :delay="200"
          class="relative flex items-center w-full xl:w-3/4 2xl:w-1/2">
            <Icon
              @click="handleNext"
              class="absolute hidden transition-all opacity-50 xl:right-0 md:right-16 md:flex text-gold hover:cursor-pointer hover:opacity-100"
              icon="flowbite:angle-right-outline"
              width="32"
            />
            <Icon
              @click="handlePrev"
              class="absolute hidden transition-all opacity-50 xl:left-0 md:left-16 md:flex text-gold hover:cursor-pointer hover:opacity-100"
              icon="flowbite:angle-left-outline"
              width="32"
            />

            <div
              ref="containerRef"
              class="flex w-full overflow-scroll snap-x snap-mandatory no-scrollbar"
            >
              <Image :img="ToneUp" />
              <Image :img="AeroBlack" />
            </div>
          </div>
        </div>

        <!-- call to action -->
        <div
          class="flex flex-col items-center justify-center w-full gap-5 md:flex-row xl:justify-start"
        >
          <Button
            link="https://www.tiktok.com/@mooipureglow.id"
            text="Belanja di TikTok"
          />
          <Button
            link="https://shopee.co.id/mooiglowserum"
            text="Belanja di Shopee"
          />
        </div>
      </div>
    </div>
  </div>
</template>
