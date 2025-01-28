<script setup lang="ts">
interface Socials {
  type: string;
  name: string;
  url: string;
}
const props = defineProps<{
  avatar: string;
  fullName: string;
  profession: string;
  description: string;
  resume: string;
  socials: Socials[];
}>();

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-vue-next";
</script>

<template>
  <Card>
    <CardContent class="pt-6">
      <NuxtImg
        :src="props.avatar"
        alt="Profile Picture"
        class="rounded-full size-12 md:w-full h-auto object-cover border-2"
      />
      <div class="flex flex-col items-start gap-2">
        <div className="flex flex-row md:flex-col items-center w-full gap-4">
          <div class="flex md:items-start">
            <div class="flex flex-col items-start justify-center">
              <h1 class="font-bold md:mt-4 text-xl md:text-2xl">
                {{ props.fullName }}
              </h1>
              <p class="text-sm md:text-base text-muted-foreground">
                {{ props.profession }}
              </p>
            </div>
          </div>
        </div>
        <p class="mt-2 text-start text-sm text-muted-foreground">
          {{ props.description }}
        </p>
        <a target="_blank" :href="props.resume" class="w-full font-semibold"
          ><Button variant="default" class="mt-4 w-full"> Resume </Button></a
        >
        <div
          class="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full"
        >
          <a
            v-for="social in props.socials"
            :key="social.type"
            :href="social.url"
            target="_blank"
            class="cursor-pointer flex items-center gap-2 group"
            :title="social.name"
          >
            <Github v-show="social.type === 'GitHub'" class="size-4" />
            <Linkedin v-show="social.type === 'LinkedIn'" class="size-4" />
            <p
              class="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear"
            >
              {{ social.name }}
            </p>
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
