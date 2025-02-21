import { z } from "zod";

// Esquema de validación
const StoresSchema = z.object({
  name: z.string(),
  logo: z.string(),
  phone: z.string(),
  email: z.string()
}).strict();

// Inferir el tipo TypeScript a partir del esquema
type StoresSchemaType = z.infer<typeof StoresSchema>;

export { StoresSchema, StoresSchemaType };
