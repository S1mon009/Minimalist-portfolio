<script setup lang="ts">
import { cn } from "~/lib/utils";

const props = defineProps<{
  id: string;
}>();

interface Colors {
  [key: string]: string;
}
const colors: Colors = {
  "React.js": "bg-[#61DAFB]",
  "Next.js": "bg-black",
  TypeScript: "bg-[#3178C6]",
  JavaScript: "bg-[#F7DF1E]",
  Udemy: "bg-[#A435F0]",
  HTML: "bg-[#E34F26]",
};

const getColor = (item: string) => colors[item] || "";

const color = computed(() => getColor(props.id));
</script>
<template>
  <div :class="cn('size-4 rounded-full', color)" />
</template>
