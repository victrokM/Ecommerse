import { z } from "zod";

// Esquema de validación
const ProductSchema = z.object({
    name: z.string(),
    priority: z.number(),
    description: z.string()
}).strict();

// Inferir el tipo TypeScript a partir del esquema
type ProductSchemaType = z.infer<typeof ProductSchema>;

export { ProductSchema, ProductSchemaType };
