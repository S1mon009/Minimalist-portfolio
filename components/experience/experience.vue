<script setup lang="ts">
import type { ExperienceProps } from "./props";
import { CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-vue-next";

const props = defineProps<ExperienceProps>();
</script>
<template>
  <NuxtLayout name="collapse-card" class="mt-4">
    <template #header>Work Experience</template>
    <CardContent>
      <ul class="space-y-8">
        <li
          v-for="(item, index) in props.experience"
          :key="index"
          class="border-b pb-8 last:border-b-0 last:pb-0"
        >
          <div class="flex items-center space-x-4">
            <NuxtImg
              :src="item.logo"
              :alt="item.company"
              class="rounded-md object-cover drop-shadow-lg"
              width="40"
              height="40"
            />
            <div>
              <h3 class="font-semibold">{{ item.role }}</h3>
              <p class="text-muted-foreground text-sm">
                {{ item.company }}
              </p>
            </div>
          </div>
          <p class="text-muted-foreground mt-2 flex items-center text-xs">
            <CalendarDays class="mr-2 size-3" />
            {{ item.duration }}
          </p>
          <p class="mt-2 text-sm">{{ item.description }}</p>
        </li>
      </ul>
    </CardContent>
  </NuxtLayout>
</template>
