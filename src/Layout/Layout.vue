<script setup>
import ContainerPage from '../components/ContainerPage.vue';
import Container from '../components/Container.vue';
import Drawer from '../components/Drawer.vue';
import Footer from '../components/Footer.vue';
</script>
<template>
  <ContainerPage>
    <Drawer />
    <Container>
        <slot />
    </Container>
    <Footer />
  </ContainerPage>
</template>
