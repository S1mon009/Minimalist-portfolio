<script setup lang="ts">
const props = defineProps<{
  skills: string[];
}>();

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus } from "lucide-vue-next";
import { ref } from "vue";

const isOpen = ref(true);
</script>

<template>
  <Card class="mt-4">
    <Collapsible v-model:open="isOpen">
      <div class="flex justify-between">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardHeader>
          <CollapsibleTrigger>
            <Plus v-if="!isOpen" class="size-6" />
            <Minus v-if="isOpen" class="size-6" />
          </CollapsibleTrigger>
        </CardHeader>
      </div>
      <CollapsibleContent>
        <CardContent>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="(skill, index) in props.skills"
              :key="index"
              variant="secondary"
              >{{ skill }}</Badge
            >
          </div>
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>
