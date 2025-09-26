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
          class="before:bg-primary after:bg-muted-foreground relative pb-8 before:absolute before:top-1.75 before:-left-5 before:h-3 before:w-3 before:rounded-full before:content-[''] after:absolute after:top-6 after:-left-3.75 after:h-[calc(100%-2.375rem)] after:w-0.5 after:content-[''] last:pb-0 last:after:h-[calc(100%-1.5rem)]"
        >
          <div class="flex items-center space-x-4">
            <div>
              <h3 class="font-semibold">{{ item.school }}</h3>
              <p class="text-muted-foreground text-sm">
                {{ item.description }}
              </p>
            </div>
          </div>
          <p class="text-muted-foreground mt-2 flex items-center text-xs">
            <CalendarDays class="mr-2 size-3" />
            {{ item.duration }}
          </p>
        </li>
      </ul>
    </CardContent>
  </NuxtLayout>
</template>
