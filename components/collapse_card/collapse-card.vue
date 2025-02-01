<script setup lang="ts">
const props = defineProps<{
  title: string;
  hideBorder?: boolean;
  className?: string;
}>();

import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus } from "lucide-vue-next";
import { ref } from "vue";
import { cn } from "~/lib/utils";

const isOpen = ref(true);
</script>

<template>
  <Card
    :class="[
      cn(props.className),
      props.hideBorder ? 'p-0 border-none shadow-none' : '',
    ]"
  >
    <Collapsible v-model:open="isOpen">
      <div class="flex justify-between">
        <CardHeader :class="props.hideBorder ? 'pl-0' : ''">
          <CardTitle>{{ props.title }}</CardTitle>
        </CardHeader>
        <CardHeader>
          <CollapsibleTrigger>
            <Plus v-if="!isOpen" class="size-6" />
            <Minus v-if="isOpen" class="size-6" />
          </CollapsibleTrigger>
        </CardHeader>
      </div>
      <CollapsibleContent>
        <slot></slot>
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>
