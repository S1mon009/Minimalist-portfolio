<script setup lang="ts">
import type { EducationProps } from "./props";
import { CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-vue-next";

const props = defineProps<EducationProps>();
</script>
<template>
  <NuxtLayout name="collapse-card" class="mt-4">
    <template #header>Education</template>
    <CardContent>
      <ul class="-space-y-4 pl-5">
        <li
          v-for="(item, index) in props.education"
          :key="index"
          class="pb-8 last:pb-0 relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-5 before:top-1.75 after:absolute after:content-[''] after:w-0.5 after:h-[calc(100%-2.375rem)] last:after:h-[calc(100%-1.5rem)] after:bg-muted-foreground after:-left-3.75 after:top-6"
        >
          <div class="flex items-center space-x-4">
            <div>
              <h3 class="font-semibold">{{ item.school }}</h3>
              <p class="text-sm text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
          </div>
          <p class="text-xs text-muted-foreground mt-2 flex items-center">
            <CalendarDays class="size-3 mr-2" />
            {{ item.duration }}
          </p>
        </li>
      </ul>
    </CardContent>
  </NuxtLayout>
</template>
