<script setup lang="ts">
import type { DotProps } from "./props";
import { colors } from "~/data/colors";

const props = defineProps<DotProps>();

const color = computed(() => colors[props.id] || "#000");
</script>

<template>
  <div
    class="h-4 w-4 rounded-full transition-colors"
    :style="{ backgroundColor: color }"
  />
</template>
