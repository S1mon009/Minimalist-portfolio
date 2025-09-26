<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";
import Dot from "@/components/ui/dot/dot.vue";

const props = defineProps<{
  projects: ProjectsCollectionItem[];
}>();
</script>

<template>
  <NuxtLayout name="collapse-card" :border="true" class="-mt-4 -mb-4">
    <template #header> Projects</template>
    <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card v-for="(project, index) in props.projects" :key="index">
        <CardContent class="h-full pt-6">
          <div class="flex h-full flex-col">
            <div class="text-primary font-semibold hover:underline">
              {{ project.title }}
            </div>
            <p class="text-muted-foreground mt-1 mb-4 line-clamp-2 text-sm">
              {{ project.description }}
            </p>
            <div class="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Dot :id="project.tech" />
                <span className="text-xs font-medium text-muted-foreground">
                  {{ project.tech }}
                </span>
              </div>
              <div class="flex items-center space-x-1">
                <Sheet>
                  <SheetTrigger as-child
                    ><Button variant="link" size="sm"
                      >View project</Button
                    ></SheetTrigger
                  >
                  <SheetContent class="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle class="text-2xl">{{
                        project.title
                      }}</SheetTitle>
                      <SheetDescription>
                        {{ project.description }}
                      </SheetDescription>
                    </SheetHeader>
                    <Separator class="mt-3" />
                    <NuxtLayout name="prose">
                      <ContentRenderer :value="project" class="mt-3" />
                    </NuxtLayout>
                  </SheetContent>
                </Sheet>
                <NuxtLink :href="project.github" target="_blank">
                  <Button variant="default" size="sm"
                    ><Github class="size-4" />GitHub</Button
                  ></NuxtLink
                >
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </NuxtLayout>
</template>
