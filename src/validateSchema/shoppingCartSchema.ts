import { z } from "zod";

// Esquema de validación
const shoppingCartSchema = z.object({
    name: z.string(),
    priority: z.number(),
    description: z.string()
}).strict();

// Inferir el tipo TypeScript a partir del esquema
type shoppingCartSchemaType = z.infer<typeof shoppingCartSchema>;

export { shoppingCartSchema, shoppingCartSchemaType };
