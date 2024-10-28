<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
<template>
  <div class="flex justify-end w-full">
    <button
      class="text-lightGold text-sm px-5 py-2.5"
      type="button"
      data-drawer-target="drawer-disabled-backdrop"
      data-drawer-show="drawer-disabled-backdrop"
      data-drawer-backdrop="false"
      aria-controls="drawer-disabled-backdrop"
    >
      <Icon class="text-3xl text-gradientText-light" icon="ci:hamburger-lg" />
    </button>

    <div
      id="drawer-disabled-backdrop"
      class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-lightBlack"
      tabindex="-1"
      aria-labelledby="drawer-disabled-backdrop-label"
    >
      <button
        type="button"
        data-drawer-hide="drawer-disabled-backdrop"
        aria-controls="drawer-disabled-backdrop"
        class="text-lightGold bg-transparent hover:border hover:border-gold rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="/"
              class="flex items-center p-2 rounded-lg text-lightGold hover:text-gold group"
            >
              <span class="ms-3">Homepage</span>
            </a>
          </li>
          <li>
            <a
              href="/career"
              class="flex items-center p-2 rounded-lg text-lightGold hover:text-gold group"
            >
              <span class="ms-3">Career</span>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>
