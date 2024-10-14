<script setup>
import Logo from "../../public/icon/icon.png";

import socials from "../assets/data/socials";
</script>
<template>
  <footer class="bg-transparent">
    <div class="w-full p-4 mx-auto max-w-screen-2xl md:py-8">
      <div
        class="flex flex-col gap-5 sm:flex-row sm:flex sm:items-center sm:justify-between"
      >
        <a
          href="/"
          class="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
        >
          <img :src="Logo" class="h-20" alt="Aero Auto Care Logo" />
          <!-- <span
            class="self-center text-2xl font-semibold text-gradient whitespace-nowrap"
          >
            Aero
          </span> -->
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li v-for="(social, index) in socials" :key="index">
            <a
              :href="social.link"
              target="_blank"
              class="hover:underline me-4 md:me-6 text-zinc-100"
            >
              {{ social.title }}
            </a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-lightGold sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div
        class="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between"
      >
        <span class="block text-sm text-zinc-100 sm:text-center">
          <p class="text-lg font-semibold">
            PT Aero Group Indonesia, Gresik, Indonesia
          </p></span
        >
        <span class="block text-sm text-zinc-100 sm:text-center"
          >© 2024
          <a href="/" class="hover:underline">PT Aero Group Indonesia</a>. All
          Rights Reserved.</span
        >
      </div>
    </div>
  </footer>
</template>
