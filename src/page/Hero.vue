<script setup>
import Button from "../components/ButtonHero.vue";
import Image from "../components/Image.vue";

import ProductImage from "../assets/data/imageHero";
import { ref } from "vue";

const containerRef = ref(null);
const currentIndex = ref(0);

// const handleNext = () => {
//   const itemWidth = containerRef.value.firstChild.clientWidth;
//   containerRef.value.scrollBy({
//     left: itemWidth,
//     behavior: "smooth",
//   });
// };

// Fungsi untuk menggeser ke item sebelumnya
// const handlePrev = () => {
//   const itemWidth = containerRef.value.firstChild.clientWidth;
//   containerRef.value.scrollBy({
//     left: -itemWidth,
//     behavior: "smooth",
//   });
// };

const handleScroll = () => {
  const container = containerRef.value; // Mengakses container melalui ref
  const scrollPosition = container.scrollLeft;
  const containerWidth = container.clientWidth;

  // Menghitung index slide yang sedang aktif
  const index = Math.round(scrollPosition / containerWidth);
  currentIndex.value = index; // Menggunakan currentIndex sebagai ref, sehingga perlu .value
  console.log(currentIndex.value);
};
</script>

<template>
  <div class="flex items-center w-full min-h-screen">
    <div class="container px-5 mx-auto my-12 md:px-10 lg:px-16">
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
                class="text-2xl font-light text-center xl:text-left text-gradient lg:text-3xl"
              >
                PT Aero Group Indonesia
              </h2>
              <hr class="w-16 mx-auto xl:mx-0 xl:w-24 border-gold" />
              <h1
                class="text-2xl font-bold text-center xl:text-left text-gradient lg:text-3xl drop-shadow-md"
              >
                Skincare & Perawatan Kendaraan Terbaik di TikTok & Shopee
              </h1>
            </div>
            <p
              class="text-base font-light text-center xl:text-left text-textWhite lg:text-xl !leading-loose"
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
            class="relative flex items-center w-full xl:w-3/4 2xl:w-1/2"
          >
            <!-- <Icon
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
            /> -->

            <div class="flex flex-col items-center w-full">
              <div
                ref="containerRef"
                @scroll="handleScroll"
                class="flex w-full overflow-scroll snap-x snap-mandatory no-scrollbar"
              >
                <Image
                  v-for="(product, index) in ProductImage"
                  :key="index"
                  :img="product.img"
                />
              </div>
              <div class="flex items-center justify-center w-full gap-2">
                <div
                  v-for="(product, index) in ProductImage"
                  :key="index"
                  :class="[
                    currentIndex == index
                      ? 'border-white'
                      : 'border-transparent',
                    'w-2 h-2 border-2 rounded-full ',
                    'bg-lightGold',
                  ]"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- call to action -->
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
          :delay="400"
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
