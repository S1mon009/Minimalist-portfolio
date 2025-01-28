<script setup lang="ts">
const props = defineProps<{ informations: string[] }>();

import { CardContent } from "@/components/ui/card";
import CollapseCard from "@/components/layouts/collapse-card.vue";
import { Circle } from "lucide-vue-next";
</script>

<template>
  <CollapseCard title="Add. information" className="mt-4">
    <CardContent>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(information, index) in props.informations"
          :key="index"
          class="flex items-center w-full"
        >
          <Circle class="size-4" :class="'mr-2'" />{{ information }}
        </div>
      </div>
    </CardContent></CollapseCard
  >
</template>
