<script setup>
import DividerSection from "../components/DividerSection.vue";
import SectionHeader from "../components/SectionHeader.vue";
import CardCareer from "../components/career/CardCareer.vue";
import data from "../assets/data/career";
import Layout from "../Layout/Layout.vue";
</script>
<template>
  <Layout>
    <div class="flex flex-col gap-6 -mt-12">
      <SectionHeader title="Career" />

      <div class="flex justify-center w-full">
        <DividerSection />
      </div>

      <div class="flex flex-col w-full gap-24 mx-auto xl:w-1/2">
        <div v-for="(career, index) in data" :key="index">
          <CardCareer
            :job="career.job"
            :placement="career.placement"
            :workplace="career.workplace"
            :salary="career.salary"
            :education="career.education"
            :gender="career.gender"
            :age="career.age"
            :experience="career.experience"
            :jobDesc="career.jobdesc"
            :description="career.description"
            :qualification="career.qualification"
            :benefit="career.benefit"
            :workDay="career.workDays"
            :workHour="career.workHour"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>
