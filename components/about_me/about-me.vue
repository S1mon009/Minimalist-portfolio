<script setup lang="ts">
import { CardContent } from "@/components/ui/card";
import CollapseCard from "@/components/layouts/collapse-card.vue";
import Prose from "@/components/layouts/prose.vue";
const about = await queryCollection("about").first();
</script>

<template>
  <CollapseCard title="About Me" className="mb-4">
    <Prose>
      <CardContent>
        <ContentRenderer :value="about" />
      </CardContent>
    </Prose>
  </CollapseCard>
</template>
