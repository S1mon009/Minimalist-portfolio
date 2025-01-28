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
import Separator from "../ui/separator/Separator.vue";

const allProjects = await queryCollection("projects")
  .order("date", "DESC")
  .all();

interface techColorsInterface {
  [key: string]: string;
}
const techColors = ref<techColorsInterface>({
  "React.js": "bg-blue-500",
  "Next.js": "bg-black",
});
const getTechColor = (tech: string) => techColors.value[tech] || "";

const isOpen = ref(true);
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <div class="flex justify-between">
      <CardHeader class="pl-0">
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardHeader>
        <CollapsibleTrigger>
          <Plus v-if="!isOpen" class="size-6" />
          <Minus v-if="isOpen" class="size-6" />
        </CollapsibleTrigger>
      </CardHeader>
    </div>
    <CollapsibleContent>
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
                    :class="
                      cn('size-4 rounded-full', getTechColor(project.tech))
                    "
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
                      <div class="prose -mt-9">
                        <ContentRenderer :value="project" />
                      </div>
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
    </CollapsibleContent>
  </Collapsible>
</template>
