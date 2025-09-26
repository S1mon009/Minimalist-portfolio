// Dot.ts
import { cva, type VariantProps } from "class-variance-authority";
export { default as Dot } from "./dot.vue";
import { colors } from "~/data/colors";

// Definicja wariantów dla Dot
export const dotVariants = cva("size-4 rounded-full transition-colors", {
  variants: {
    color: Object.keys(colors).reduce((acc, key) => {
      acc[key] = `bg-[${colors[key]}]`;
      return acc;
    }, {} as Record<string, string>),
  },
  defaultVariants: {
    color: "default",
  },
});

export type DotVariants = VariantProps<typeof dotVariants>;
