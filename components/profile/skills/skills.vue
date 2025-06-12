<script setup lang="ts">
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SkillsProps } from "./props";

const props = defineProps<SkillsProps>();
</script>

<template>
  <NuxtLayout name="collapse-card" class="mt-4">
    <template #header>Skills</template>
    <CardContent>
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="(skill, index) in props.skills"
          :key="index"
          variant="secondary"
          >{{ skill }}</Badge
        >
      </div>
    </CardContent>
  </NuxtLayout>
</template>
