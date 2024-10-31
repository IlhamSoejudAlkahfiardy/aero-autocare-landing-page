<script setup>
import Layout from "../Layout/Layout.vue";
import DividerSection from "../components/DividerSection.vue";
import HeaderParagraph from "../components/vision/HeaderParagraph.vue";
import HeaderText from "../components/vision/HeaderText.vue";
import TextParagraph from "../components/vision/TextParagraph.vue";
import visions from "../assets/data/vision";

</script>
<template>
  <Layout>
    <div class="flex flex-col gap-6 -mt-12">
      <!-- <SectionHeader title="Visi dan Misi Strategis PT. Aero Group Indonesia" /> -->
      <h1 class="text-3xl font-semibold text-center text-gradient lg:text-4xl">
        Visi dan Misi Strategis <br />
        PT. Aero Group Indonesia
      </h1>

      <div class="flex justify-center w-full">
        <DividerSection />
      </div>

      <div class="max-w-5xl mx-auto mt-12">
        <ol>
          <li v-for="(item, index) in visions" :key="index" class="space-y-5">
            <HeaderParagraph :title="item.title" />
            <TextParagraph :text="item.content" />

            <ol>
              <li
                class="mb-10 space-y-5 ms-5"
                v-for="(subItem, subIndex) in item.items"
                :key="subIndex"
              >
                <!-- <p class="text-white">{{ subItem.title }}</p> -->
                <HeaderText :title="subItem.title" />
                <ol>
                  <li
                    class="mb-3"
                    v-for="(subSubItem, subSubIndex) in subItem.subItems"
                    :key="subSubIndex"
                  >
                    <div class="flex items-center">
                      <div class="w-2 h-2 rounded-full bg-lightGold"></div>
                      <p
                        class="text-sm font-semibold text-justify ms-3 xl:text-base text-textWhite"
                      >
                        {{ subSubItem.title }}
                      </p>
                    </div>
                    <div class="ms-5">
                      <TextParagraph :text="subSubItem.content" />
                    </div>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </Layout>
</template>
