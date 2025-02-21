import { z } from "zod";

// Esquema de validación
const userSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  Email: z.string().email({ message: "El correo electrónico no es válido" }),
  lastName: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial",
      }
    ),
  role: z.string(),
  avatar: z.string(),
  phone: z.number(),
  addressId: z.string(),
  isActive: z.boolean(),
  CC: z.string(),
  birthday: z.string(),
  gender: z.string(),
  country: z.string(),
  city: z.string(),
}).strict();

// Inferir el tipo TypeScript a partir del esquema
type UserSchemaType = z.infer<typeof userSchema>;

export { userSchema, UserSchemaType };
