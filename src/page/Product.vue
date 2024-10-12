<script setup>
import Container from "../components/Container.vue";
import SectionHeader from "../components/SectionHeader.vue";
import DividerSection from "../components/DividerSection.vue";
import Button from "../components/ButtonProduct.vue";
import products from "../assets/data/products";
</script>
<template>
  <Container>
    <div class="flex flex-col max-w-5xl gap-6 mx-auto">
      <!-- section -->
      <SectionHeader title="Produk Favorit Untuk Keseharian Anda" />

      <!-- divider -->
      <div class="flex justify-center w-full">
        <DividerSection />
      </div>

      <!-- product -->
      <div class="flex flex-col gap-10 px-0 mt-12">
        <!-- Loop through the products array -->
        <div
          v-for="(product, index) in products"
          :key="index"
          class="flex flex-col gap-5 my-5"
        >
          <h1
            :class="[
              index % 2 === 0 ? 'xl:text-start' : 'xl:text-end',
              'text-2xl font-medium text-gradient lg:text-3xl',
            ]"
          >
            {{ product.title }}
          </h1>

          <p
            :class="[index % 2 === 0 ? 'xl:text-start' : 'xl:text-end', 'text-base font-light text-justify text-textWhite lg:text-lg xl:text-xl !leading-loose']"
          >
            {{ product.desc }}
          </p>

          <!-- CTA Buttons -->
          <div :class="[index % 2 === 0 ? 'xl:justify-start' : 'xl:items-end', 'flex flex-col gap-3 my-3 md:gap-5 ']">
            <Button :text="'Lihat di TikTok'" :link="product.tiktok" />
            <Button :text="'Lihat di Shopee'" :link="product.shopee" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
