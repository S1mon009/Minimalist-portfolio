<script setup lang="ts">
const { avatar, fullName, profession, description, resume, socials } =
  await queryCollection("profile").first();
const { skills } = await queryCollection("skills").first();
const { languages } = await queryCollection("languages").first();
const { informations } = await queryCollection(
  "additionalInformations"
).first();
</script>

<template>
  <div class="bg-background min-h-screen">
    <div class="container max-w-screen-lg mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside class="md:col-span-1">
          <Profile
            :avatar="avatar"
            :full-name="fullName"
            :profession="profession"
            :description="description"
            :resume="resume"
            :socials="socials"
          />
          <Skills :skills="skills" />
          <Languages :languages="languages" />
          <AdditionalInformation :informations="informations" />
        </aside>
        <main class="md:col-span-2"><AboutMe /><Projects /></main>
      </div>
    </div>
  </div>
</template>
