<script setup lang="ts">
const props = defineProps<{
  courses: {
    name: string;
    description: string;
    file: string;
    finishedAt: string;
    company: string;
  }[];
}>();

import Dot from "@/components/ui/dot.vue";
import CollapseCard from "@/components/collapse_card/collapse-card.vue";
import { ExternalLink } from "lucide-vue-next";
</script>
<template>
  <CollapseCard title="Courses" :hideBorder="true">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card v-for="(course, index) in props.courses" :key="index">
        <CardContent class="pt-6 h-full">
          <div class="flex flex-col h-full">
            <div class="font-semibold text-primary hover:underline">
              {{ course.name }}
            </div>
            <p
              class="text-sm text-muted-foreground mt-1 mb-4 line-clamp-2"
              :title="course.description"
            >
              {{ course.description }}
            </p>
            <div class="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Dot :id="course.company" />
                <span className="text-xs font-medium text-muted-foreground">
                  {{ course.company }}
                </span>
              </div>
              <div class="flex items-center space-x-1">
                <NuxtLink :href="course.file" target="_blank" external>
                  <Button variant="default" size="sm"
                    ><ExternalLink class="size-4" />Preview</Button
                  ></NuxtLink
                >
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </CollapseCard>
</template>
