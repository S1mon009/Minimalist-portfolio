<script setup lang="ts">
import type { DotProps } from "./props";
import { colors } from "~/data/colors";

const props = defineProps<DotProps>();
const getColor = (item: string) => colors[item] || "";
const color = computed(() => getColor(props.id));
</script>
<template>
  <div class="size-4 rounded-full" :style="{ backgroundColor: color }" />
</template>
