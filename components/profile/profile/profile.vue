<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-vue-next";
import type { ProfileProps } from "./props";

const props = defineProps<ProfileProps>();
</script>

<template>
  <Card>
    <CardContent class="pt-6">
      <NuxtImg
        :src="props.avatar"
        alt="Profile Picture"
        class="size-12 h-auto rounded-full border-2 object-cover md:w-full"
      />
      <div class="flex flex-col items-start gap-2">
        <div className="flex flex-row md:flex-col items-center w-full gap-4">
          <div class="flex md:items-start">
            <div class="flex flex-col items-start justify-center">
              <h1 class="text-xl font-bold md:mt-4 md:text-2xl">
                {{ props.fullName }}
              </h1>
              <p class="text-muted-foreground text-sm md:text-base">
                {{ props.profession }}
              </p>
            </div>
          </div>
        </div>
        <p class="text-muted-foreground mt-2 text-start text-sm">
          {{ props.description }}
        </p>
        <NuxtLink
          target="_blank"
          :href="props.resume"
          class="w-full font-semibold"
          external
          ><Button variant="default" class="mt-4 w-full">
            Resume
          </Button></NuxtLink
        >
        <div
          class="border-border mt-4 flex w-full flex-col space-y-2 border-t pt-4"
        >
          <NuxtLink
            v-for="social in props.socials"
            :key="social.type"
            :href="social.url"
            target="_blank"
            class="group flex cursor-pointer items-center gap-2"
            :title="social.name"
            external
          >
            <Github v-show="social.type === 'GitHub'" class="size-4" />
            <Linkedin v-show="social.type === 'LinkedIn'" class="size-4" />
            <p
              class="text-muted-foreground group-hover:text-primary transition-color text-sm duration-200 ease-linear"
            >
              {{ social.name }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
