<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";
const props = defineProps<{
  projects: ProjectsCollectionItem[];
}>();

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
import CollapseCard from "@/components/collapse_card/collapse-card.vue";
import Dot from "@/components/ui/dot.vue";
</script>

<template>
  <CollapseCard title="Projects" :hideBorder="true" className="-mt-4 -mb-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card v-for="(project, index) in props.projects" :key="index">
        <CardContent class="pt-6 h-full">
          <div class="flex flex-col h-full">
            <div class="font-semibold text-primary hover:underline">
              {{ project.title }}
            </div>
            <p class="text-sm text-muted-foreground mt-1 mb-4 line-clamp-2">
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
                      ><ContentRenderer :value="project" class="mt-3"
                    /></NuxtLayout>
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
    </div></CollapseCard
  >
</template>
