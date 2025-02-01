<script setup lang="ts">
const props = defineProps<{
  experience: {
    role: string;
    company: string;
    logo: string;
    duration: string;
    description: string;
  }[];
}>();

import { CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-vue-next";
import CollapseCard from "@/components/collapse_card/collapse-card.vue";
</script>
<template>
  <CollapseCard title="Work Experience" className="mt-4">
    <CardContent>
      <ul class="space-y-8">
        <li
          v-for="(experience, index) in props.experience"
          :key="index"
          class="border-b last:border-b-0 pb-8 last:pb-0"
        >
          <div class="flex items-center space-x-4">
            <NuxtImg
              :src="experience.logo"
              :alt="experience.company"
              class="rounded-md object-cover drop-shadow-lg"
              width="40"
              height="40"
            />
            <div>
              <h3 class="font-semibold">{{ experience.role }}</h3>
              <p class="text-sm text-muted-foreground">
                {{ experience.company }}
              </p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground mt-2 flex items-center">
            <CalendarDays class="size-3 mr-2" />
            {{ experience.duration }}
          </p>
          <p class="text-sm mt-2">{{ experience.description }}</p>
        </li>
      </ul>
    </CardContent>
  </CollapseCard>
</template>
