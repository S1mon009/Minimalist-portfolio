<script setup lang="ts">
const props = defineProps<{
  skills: string[];
}>();

import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CollapseCard from "@/components/layouts/collapse-card.vue";
</script>

<template>
  <CollapseCard title="Skills" className="mt-4"
    ><CardContent>
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="(skill, index) in props.skills"
          :key="index"
          variant="secondary"
          >{{ skill }}</Badge
        >
      </div>
    </CardContent>
  </CollapseCard>
</template>
