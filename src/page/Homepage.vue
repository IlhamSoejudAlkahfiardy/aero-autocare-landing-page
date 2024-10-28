<script setup>
import Hero from "../views/homepage/Hero.vue";
import AboutUs from "../views/homepage/AboutUs.vue";
import Product from "../views/homepage/Product.vue";
import USP from "../views/homepage/USP.vue";
import Footer from "../components/Footer.vue";
import ContainerPage from "../components/ContainerPage.vue";
</script>
<template>
  <ContainerPage>
    <Hero />
    <AboutUs />
    <Product />
    <USP />
    <Footer />
  </ContainerPage>
</template>
