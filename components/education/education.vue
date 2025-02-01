<script setup lang="ts">
const props = defineProps<{
  education: {
    school: string;
    description: string;
    duration: string;
  }[];
}>();

import { CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-vue-next";
import CollapseCard from "@/components/collapse_card/collapse-card.vue";
</script>
<template>
  <CollapseCard title="Education" className="mt-4">
    <CardContent>
      <ul class="-space-y-4 pl-5">
        <li
          v-for="(education, index) in props.education"
          :key="index"
          class="pb-8 last:pb-0 relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-5 before:top-[0.4375rem] after:absolute after:content-[''] after:w-0.5 after:h-[calc(100%-2.375rem)] last:after:h-[calc(100%-1.5rem)] after:bg-muted-foreground after:-left-[0.9375rem] after:top-6"
        >
          <div class="flex items-center space-x-4">
            <div>
              <h3 class="font-semibold">{{ education.school }}</h3>
              <p class="text-sm text-muted-foreground">
                {{ education.description }}
              </p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground mt-2 flex items-center">
            <CalendarDays class="size-3 mr-2" />
            {{ education.duration }}
          </p>
        </li>
      </ul>
    </CardContent>
  </CollapseCard>
</template>
