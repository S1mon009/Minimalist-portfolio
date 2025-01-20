<script setup lang="ts">
import Sidebar from "@/components/sidebar/sidebar.vue";
import Main from "@/components/main/main.vue";
</script>

<template>
  <div class="bg-background min-h-screen">
    <div class="container max-w-screen-lg mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Sidebar />
        <Main />
      </div>
    </div>
  </div>
</template>
