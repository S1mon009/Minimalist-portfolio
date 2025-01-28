<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "~/lib/utils";
import { Github } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";
import CollapseCard from "@/components/layouts/collapse-card.vue";
import Prose from "@/components/layouts/prose.vue";
import { getTechColor } from "./tech-colors";

const allProjects = await queryCollection("projects")
  .order("date", "DESC")
  .all();
</script>

<template>
  <CollapseCard title="Projects" :hideBorder="true">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card v-for="(project, index) in allProjects" :key="index">
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
                <div
                  :class="cn('size-4 rounded-full', getTechColor(project.tech))"
                />
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
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle class="text-2xl">{{
                        project.title
                      }}</SheetTitle>
                      <SheetDescription>
                        {{ project.description }}
                      </SheetDescription>
                    </SheetHeader>
                    <Separator class="mt-3" />
                    <Prose><ContentRenderer :value="project" /></Prose>
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
