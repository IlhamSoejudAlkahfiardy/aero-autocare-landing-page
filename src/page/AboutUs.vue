<script setup>
import Container from "../components/Container.vue";
import DividerSection from "../components/DividerSection.vue";
import SectionHeader from "../components/SectionHeader.vue";
</script>
<template>
  <Container>
    <div class="flex flex-col gap-6">
      <SectionHeader title="Tentang Kami" />

      <div class="flex justify-center w-full">
        <DividerSection />
      </div>

      <div class="w-full px-6 mx-auto lg:w-3/4">
        <p class="text-base font-light text-justify xl:text-center text-textWhite lg:text-xl xl:text-2xl lg:leading-loose !leading-loose">
          PT Aero Group Indonesia adalah perusahaan yang fokus pada penjualan
          produk berkualitas melalui platform online terpopuler seperti TikTok
          dan Shopee. Dengan lini produk andalan kami, yaitu Mooi & Epidermia
          untuk skincare, serta Aero Autocare untuk perawatan kendaraan, kami
          memastikan konsumen mendapatkan kemudahan dan kepercayaan dalam
          berbelanja produk berkualitas secara online.
        </p>
      </div>
    </div>
  </Container>
</template>
