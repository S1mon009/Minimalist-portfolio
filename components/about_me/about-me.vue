<script setup lang="ts">
import { CardContent } from "@/components/ui/card";
import CollapseCard from "@/components/collapse_card/collapse-card.vue";
// import Prose from "@/components/layouts/prose.vue";
const about = await queryCollection("about").first();
</script>

<template>
  <CollapseCard title="About Me" className="mb-4">
    <NuxtLayout name="prose">
      <CardContent>
        <ContentRenderer :value="about" class="-mt-6" />
      </CardContent>
    </NuxtLayout>
    <!-- <Prose>
      <CardContent>
        <ContentRenderer :value="about" class="-mt-6" />
      </CardContent>
    </Prose> -->
  </CollapseCard>
</template>
