import { z } from "zod";

// Esquema de validación
const AddressSchema = z.object({
    address: z.string(),
    city: z.number(),
    state: z.string(),
    country: z.string(),
    postalCode: z.number()
}).strict();

// Inferir el tipo TypeScript a partir del esquema
type AddressSchemaType = z.infer<typeof AddressSchema>;

export { AddressSchema, AddressSchemaType };
