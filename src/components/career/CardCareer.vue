<script setup>
// import Brand from "../assets/image/brand.webp";
import Brand from "../../assets/image/brand.webp";
import { Icon } from "@iconify/vue/dist/iconify.js";

defineProps({
  job: String,
  placement: String,
  workplace: String,
  salary: String,
  education: String,
  gender: String,
  age: String,
  experience: String,
  jobDesc: Array,
  description: Array,
  qualification: Array,
  benefit: Array,
  workDay: String,
  workHour: String,
});
</script>

<template>
  <div
    class="flex flex-col w-full gap-12 p-5 mx-auto border shadow xl:p-10 border-gold/70 rounded-xl h-fit"
  >
    <div class="flex gap-6">
      <img :src="Brand" alt="" class="h-16 rounded-full" />
      <div class="flex flex-col gap-3">
        <h1 class="text-lg font-semibold text-textWhite">{{ job }}</h1>
        <p class="text-base font-normal text-textWhite">
          PT. Aero Group Indonesia
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <Icon
          class="text-xl text-gradientText-light"
          icon="material-symbols:location-on-rounded"
        />
        <p class="text-sm font-light text-textWhite">{{ placement }}</p>
      </div>
      <div class="flex items-center gap-3">
        <Icon
          class="text-xl text-gradientText-light"
          icon="material-symbols:task-rounded"
        />
        <p class="text-sm font-light text-textWhite">{{ workplace }}</p>
      </div>
      <div class="flex items-center gap-3">
        <Icon
          class="text-xl text-gradientText-light"
          icon="material-symbols:attach-money"
        />
        <p class="text-sm font-light text-textWhite">{{ salary }}</p>
      </div>
    </div>

    <hr class="w-full border-t border-gold/35" />

    <div class="grid w-full grid-cols-2 xl:w-3/4 gap-y-6 gap-x-16">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Icon
            class="text-xl text-gradientText-light"
            icon="ri:graduation-cap-line"
          />
          <p class="text-sm font-normal text-textWhite">Pendidikan</p>
        </div>
        <p class="text-xs font-light xl:text-sm text-textWhite">
          {{ education }}
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Icon
            class="text-xl text-gradientText-light"
            icon="material-symbols-light:man"
          />
          <p class="text-sm font-normal text-textWhite">Jenis Kelamin</p>
        </div>
        <p class="text-xs font-light xl:text-sm text-textWhite">{{ gender }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Icon
            class="text-xl text-gradientText-light"
            icon="ic:baseline-person"
          />
          <p class="text-sm font-normal text-textWhite">Usia</p>
        </div>
        <p class="text-xs font-light xl:text-sm text-textWhite">{{ age }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <Icon
            class="text-xl text-gradientText-light"
            icon="material-symbols:fact-check-outline"
          />
          <p class="text-sm font-normal text-textWhite">Pengalaman</p>
        </div>
        <p class="text-xs font-light xl:text-sm text-textWhite">
          {{ experience }}
        </p>
      </div>
    </div>

    <hr class="w-full border-t border-gold/35" />

    <div class="flex flex-col gap-6">
      <p class="text-sm font-medium text-textWhite">
        Pekerjaan ini membutuhkan
      </p>
      <div class="flex flex-wrap items-center w-full gap-3">
        <!-- Looping data jobDesc -->
        <div
          v-for="(item, index) in jobDesc"
          :key="index"
          class="flex items-center gap-3 px-3 py-2 border rounded-lg border-gold/35 bg-lightBlack"
        >
          <Icon
            class="text-xl text-gradientText-light"
            icon="material-symbols:check"
          />
          <p class="text-xs font-normal text-textWhite">{{ item }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <p class="text-sm font-semibold text-textWhite">Deskripsi Pekerjaan</p>
      <ol
        type="1"
        class="space-y-2 text-sm font-light tracking-wide list-decimal text-textWhite"
      >
        <li v-for="(desc, index) in description" :key="index" class="ms-3">
          <p>{{ desc }}</p>
        </li>
      </ol>
    </div>

    <div class="flex flex-col gap-3" v-if="qualification && qualification.length">
      <p class="text-sm font-semibold text-textWhite">Kualifikasi</p>
      <ol
        type="1"
        class="space-y-2 text-sm font-light tracking-wide list-decimal text-textWhite"
      >
        <li v-for="(qual, index) in qualification" :key="index" class="ms-3">
          <p>{{ qual }}</p>
        </li>
      </ol>
    </div>

    <div class="flex flex-col gap-6">
      <p class="text-sm font-medium text-textWhite">Benefit</p>
      <div class="flex flex-wrap items-center w-full gap-3">
        <div
          v-for="(benefitItem, index) in benefit"
          :key="index"
          class="px-3 py-2 border rounded-lg border-gold/35 bg-gold/35"
        >
          <p class="text-xs font-normal text-textWhite">{{ benefitItem }}</p>
        </div>
      </div>
    </div>

    <div class="grid w-3/4 grid-cols-2 gap-y-6 gap-x-16">
      <div class="flex flex-col gap-3">
        <p class="text-sm font-normal text-textWhite">Hari Kerja</p>
        <p class="text-sm font-light text-textWhite">{{ workDay }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-sm font-normal text-textWhite">Jam Kerja</p>
        <p class="text-sm font-light text-textWhite">{{ workHour }}</p>
      </div>
    </div>

    <a
      href="#"
      class="w-full py-3 text-sm font-medium text-center border rounded text-textWhite hover:bg-lightBlack border-gold/35"
    >
      Lamar Sekarang
    </a>
  </div>
</template>
