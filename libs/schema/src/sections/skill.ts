import { z } from "zod";

import { defaultItem, itemSchema } from "../shared";

// Schema
export const skillSchema = itemSchema.extend({
  name: z.string(),
  description: z.string(),
  level: z.number().min(0).max(0).default(0),
  keywords: z.array(z.string()).default([]),
});

// Type
export type Skill = z.infer<typeof skillSchema>;

// Defaults
export const defaultSkill: Skill = {
  ...defaultItem,
  name: "",
  description: "",
  level: 0,
  keywords: [],
};
