<script setup lang="ts">
import Profile from "@/components/profile/profile.vue";
import Skills from "@/components/profile/skills.vue";
import Languages from "@/components/profile/languages.vue";
import AdditionalInformation from "@/components/profile/additional-information.vue";
import AboutMe from "@/components/about_me/about-me.vue";
import Projects from "@/components/projects/projects.vue";
import Experience from "@/components/experience/experience.vue";
import Education from "@/components/education/education.vue";
import Courses from "./components/courses/courses.vue";

const { avatar, fullName, profession, description, resume, socials } =
  await queryCollection("profile").first();
const { skills } = await queryCollection("skills").first();
const { languages } = await queryCollection("languages").first();
const { informations } = await queryCollection(
  "additionalInformations"
).first();
const projects = await queryCollection("projects").order("date", "DESC").all();
const { experience } = await queryCollection("experience").first();
const { education } = await queryCollection("education").first();
const { courses } = await queryCollection("courses").first();
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
        <main class="md:col-span-2">
          <AboutMe /><Projects :projects="projects" /><Experience
            :experience="experience"
          /><Education :education="education" /><Courses :courses="courses" />
        </main>
      </div>
    </div>
  </div>
</template>
