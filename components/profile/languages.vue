<script setup lang="ts">
import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Languages {
  language: string;
  knowledge: number;
  level: string;
}
const props = defineProps<{
  languages: Languages[];
}>();
</script>

<template>
  <NuxtLayout name="collapse-card" class="mt-4">
    <template #header>Languages</template>
    <CardContent>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="language in props.languages"
          :key="language.language"
          class="w-full"
        >
          <span class="block mb-1"
            >{{ language.language }}
            <span class="text-muted-foreground"
              >({{ language.level }})</span
            ></span
          >
          <Progress :model-value="language.knowledge" />
        </div>
      </div>
    </CardContent>
  </NuxtLayout>
</template>
