<script setup lang="ts">
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus } from "lucide-vue-next";
import { ref } from "vue";

const layoutProps = useAttrs();

const isOpen = ref<boolean>(true);
</script>

<template>
  <Card
    :class="[
      layoutProps.class || '',
      layoutProps.border ? 'p-0 border-none shadow-none' : '',
    ]"
    class="collapse-card"
  >
    <Collapsible v-model:open="isOpen">
      <div class="flex justify-between">
        <CardHeader :class="layoutProps.border ? 'pl-0' : ''">
          <CardTitle><slot name="header" /></CardTitle>
        </CardHeader>
        <CardHeader>
          <CollapsibleTrigger class="collapse-trigger cursor-pointer">
            <Plus v-if="!isOpen" class="w-6 h-6" />
            <Minus v-if="isOpen" class="w-6 h-6" />
          </CollapsibleTrigger>
        </CardHeader>
      </div>
      <CollapsibleContent class="collapse-content">
        <slot />
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>
