<script setup lang="ts">
import { CardContent } from "@/components/ui/card";
import { Circle } from "lucide-vue-next";

const props = defineProps<{ informations: string[] }>();
</script>

<template>
  <NuxtLayout name="collapse-card" class="mt-4">
    <template #header>Add. Information</template>
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
    </CardContent>
  </NuxtLayout>
</template>
