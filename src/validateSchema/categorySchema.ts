import { z } from "zod";

// Esquema de validación
const CategorySchema = z.object({
    name: z.string(),
    subCategories: z.array(z.string()).optional(),
    products: z.array(z.string()).optional()
}).strict();

// Inferir el tipo TypeScript a partir del esquema
type CategorySchemaType = z.infer<typeof CategorySchema>;

export { CategorySchema, CategorySchemaType };
