<script setup lang="ts">
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Circle, Plus, Minus } from "lucide-vue-next";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ref } from "vue";

const isOpen = ref(true);

const store = useGlobalStore();
</script>

<template>
  <Card class="mt-4">
    <Collapsible v-model:open="isOpen">
      <div class="flex justify-between">
        <CardHeader>
          <CardTitle>Add. information</CardTitle>
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
              v-for="(information, index) in store.information"
              :key="index"
              class="flex items-center w-full"
            >
              <Circle class="size-4" :class="'mr-2'" />{{ information }}
            </div>
          </div>
        </CardContent></CollapsibleContent
      >
    </Collapsible>
  </Card>
</template>
