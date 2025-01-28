interface techColorsInterface {
  [key: string]: string;
}
const techColors: techColorsInterface = {
  "React.js": "bg-blue-500",
  "Next.js": "bg-black",
};

export const getTechColor = (tech: string) => techColors[tech] || "";
