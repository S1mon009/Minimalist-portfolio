<script setup lang="ts">
import { CardContent } from "@/components/ui/card";

const about = await queryCollection("about").first();
</script>

<template>
  <NuxtLayout name="collapse-card" class="mb-4">
    <template #header>About Me</template>
    <NuxtLayout name="prose">
      <CardContent>
        <ContentRenderer :value="about" class="-mt-6" />
      </CardContent>
    </NuxtLayout>
  </NuxtLayout>
</template>
