<script setup lang="ts">
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus } from "lucide-vue-next";
import { ref } from "vue";

const isOpen = ref(true);

const store = useGlobalStore();
</script>

<template>
  <Card class="mt-4">
    <Collapsible v-model:open="isOpen">
      <div class="flex justify-between">
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardHeader>
          <CollapsibleTrigger>
            <Plus v-if="!isOpen" class="size-6" />
            <Minus v-if="isOpen" class="size-6" />
          </CollapsibleTrigger>
        </CardHeader>
      </div>
      <CollapsibleContent
        ><CardContent>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="language in store.languages"
              :key="language.language"
              class="w-full"
            >
              <span class="block mb-1"
                >{{ language.language }}
                <span class="text-muted-foreground"
                  >({{ language.level }})</span
                ></span
              >
              <Progress :model-value="language.knowledge" />
            </div>
          </div> </CardContent
      ></CollapsibleContent>
    </Collapsible>
  </Card>
</template>
