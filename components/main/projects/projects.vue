<script setup lang="ts">
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "~/lib/utils";
import { Plus, Minus } from "lucide-vue-next";
import { ref } from "vue";

const isOpen = ref(true);

const store = useGlobalStore();
const techColors = useTechColorsStore();
console.log(techColors.techColors["Next.js" as keyof typeof techColors]);
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
        <Card v-for="(project, index) in store.projects" :key="index">
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
                  <div :class="cn('size-4 rounded-full', project.color)" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {{ project.tech }}
                  </span>
                </div>
                <div
                  class="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Project
                  <!-- <ExternalLink class="inline-block size-3" /> -->
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <CardContent> </CardContent>
    </CollapsibleContent>
  </Collapsible>
</template>
