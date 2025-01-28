<script setup lang="ts">
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus, Minus } from "lucide-vue-next";
import { ref } from "vue";
const about = await queryCollection("about").first();

const isOpen = ref(true);
</script>

<template>
  <Card className="mb-4">
    <Collapsible v-model:open="isOpen">
      <div class="flex justify-between">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardHeader>
          <CollapsibleTrigger>
            <Plus v-if="!isOpen" class="size-6" />
            <Minus v-if="isOpen" class="size-6" />
          </CollapsibleTrigger>
        </CardHeader>
      </div>
      <CollapsibleContent>
        <CardContent class="prose">
          <ContentRenderer :value="about" />
        </CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>
