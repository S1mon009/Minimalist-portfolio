<script setup lang="ts">
import type { CourseProps } from "./props";
import { ExternalLink } from "lucide-vue-next";
import Dot from "@/components/ui/dot/dot.vue";

const props = defineProps<CourseProps>();
</script>
<template>
  <NuxtLayout name="collapse-card" :border="true" class="-mt-4 -mb-4">
    <template #header> Courses</template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card v-for="(course, index) in props.courses" :key="index">
        <CardContent class="pt-6 h-full">
          <div class="flex flex-col h-full">
            <div class="font-semibold text-primary hover:underline">
              {{ course.name }}
            </div>
            <p class="text-sm text-muted-foreground mt-1 mb-4 line-clamp-2">
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
                <Sheet>
                  <SheetTrigger as-child
                    ><Button variant="link" size="sm"
                      >Read more</Button
                    ></SheetTrigger
                  >
                  <SheetContent class="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle class="text-2xl">{{
                        course.name
                      }}</SheetTitle>
                      <Separator class="mt-3" />
                      <SheetDescription>
                        {{ course.description }}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                <div class="flex items-center space-x-1">
                  <NuxtLink :href="course.file" target="_blank" external>
                    <Button variant="default" size="sm"
                      ><ExternalLink class="size-4" />Preview</Button
                    ></NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </NuxtLayout>
</template>
