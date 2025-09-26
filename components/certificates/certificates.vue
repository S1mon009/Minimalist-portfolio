<script setup lang="ts">
import type { CertificatesProps } from "./props";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const props = defineProps<CertificatesProps>();
</script>
<template>
  <NuxtLayout name="collapse-card" :border="true">
    <template #header>Certificates</template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card v-for="(certificate, index) in props.certificates" :key="index">
        <CardContent class="pt-6 h-full">
          <div class="flex flex-col h-full">
            <div class="font-semibold text-primary hover:underline">
              {{ certificate.name }}
            </div>
            <p class="text-sm text-muted-foreground mt-1 mb-4 line-clamp-2">
              {{ certificate.description }}
            </p>
            <div class="mt-auto flex items-center justify-end">
              <div class="flex items-center space-x-1">
                <Sheet>
                  <SheetTrigger as-child
                    ><Button variant="link" size="sm"
                      >Read more</Button
                    ></SheetTrigger
                  >
                  <SheetContent class="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle class="text-2xl"
                        >{{ certificate.name }} -
                        {{ certificate.fullName }}</SheetTitle
                      >
                      <Separator class="mt-3" />
                      <SheetDescription>
                        {{ certificate.description }}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </NuxtLayout>
</template>
