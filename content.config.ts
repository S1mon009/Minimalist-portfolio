import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    profile: defineCollection({
      source: "profile/profile.json",
      type: "data",
      schema: z.object({
        avatar: z.string(),
        fullName: z.string(),
        profession: z.string(),
        description: z.string(),
        resume: z.string(),
        socials: z.array(
          z.object({
            type: z.string(),
            name: z.string(),
            url: z.string(),
          })
        ),
      }),
    }),
    skills: defineCollection({
      source: "profile/skills.json",
      type: "data",
      schema: z.object({
        skills: z.array(z.string()),
      }),
    }),
    languages: defineCollection({
      source: "profile/languages.json",
      type: "data",
      schema: z.object({
        languages: z.array(
          z.object({
            language: z.string(),
            knowledge: z.number(),
            level: z.string(),
          })
        ),
      }),
    }),
    additionalInformations: defineCollection({
      source: "profile/additional-informations.json",
      type: "data",
      schema: z.object({
        informations: z.array(z.string()),
      }),
    }),
    about: defineCollection({
      type: "page",
      source: "about/*.md",
      schema: z.object({
        date: z.string(),
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        date: z.string(),
        title: z.string(),
        descrition: z.string(),
        tech: z.string(),
        github: z.string(),
      }),
    }),
    experience: defineCollection({
      source: "experience/experience.json",
      type: "data",
      schema: z.object({
        experience: z.array(
          z.object({
            role: z.string(),
            company: z.string(),
            logo: z.string(),
            duration: z.string(),
            description: z.string(),
          })
        ),
      }),
    }),
    education: defineCollection({
      source: "education/education.json",
      type: "data",
      schema: z.object({
        education: z.array(
          z.object({
            school: z.string(),
            description: z.string(),
            duration: z.string(),
          })
        ),
      }),
    }),
    courses: defineCollection({
      source: "courses/courses.json",
      type: "data",
      schema: z.object({
        courses: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            file: z.string(),
            finishedAt: z.string(),
            company: z.string(),
          })
        ),
      }),
    }),
  },
});
