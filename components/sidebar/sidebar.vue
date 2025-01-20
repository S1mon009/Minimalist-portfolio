<script setup lang="ts">
import Profile from "@/components/sidebar/profile/profile.vue";
import Skills from "@/components/sidebar/skills/skills.vue";
import Languages from "@/components/sidebar/languages/languages.vue";
import AdditionalInformation from "@/components/sidebar/additional_information/additional-information.vue";
</script>

<template>
  <aside class="md:col-span-1">
    <Profile />
    <Skills />
    <Languages />
    <AdditionalInformation />
  </aside>
</template>
