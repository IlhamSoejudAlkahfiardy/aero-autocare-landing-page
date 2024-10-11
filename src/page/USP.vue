<script setup>
import Container from "../components/Container.vue";
import DividerSection from "../components/DividerSection.vue";
import SectionHeader from "../components/SectionHeader.vue";
import Accordion from "../components/USPAccordion.vue";

import LinkUSP from "../components/LinkUSP.vue";
</script>
<template>
  <Container>
    <div class="flex flex-col max-w-5xl gap-6 mx-auto">
      <SectionHeader title="Mengapa Kami?" />
      <div class="flex justify-center w-full">
        <DividerSection />
      </div>

      <div class="flex flex-col gap-12">
        <Accordion />

        <div class="flex flex-col gap-10">
          <LinkUSP
            title="Dapatkan Penawaran Spesial di TikTok"
            link="https://www.tiktok.com/@mooipureglow.id"
          />
          <LinkUSP
            title="Belanja Sekarang di Shopee"
            link="https://shopee.co.id/mooiglowserum"
          />
        </div>
      </div>
    </div>
  </Container>
</template>
