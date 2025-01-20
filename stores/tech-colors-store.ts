import { defineStore } from "pinia";

interface techColorsInterface {
  [key: string]: string;
}

export const useTechColorsStore = defineStore("tech-colors", () => {
  const techColors = ref<techColorsInterface>({
    "React.js": "bg-blue-500",
    "Next.js": "bg-blue-500",
  });

  return { techColors };
});
