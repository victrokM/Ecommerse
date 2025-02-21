import { Request, Response, NextFunction } from "express";
import { z, ZodSchema, ZodError } from "zod";

// Middleware de validación
const validateBody =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validar el body de la solicitud con el esquema
      const validatedData = schema.parse(req.body);
      // Asignar los datos validados a res.locals
      res.locals.validatedBody = validatedData;
      next(); // Continuar con el siguiente middleware o ruta
    } catch (error) {
      // Verificar si el error es una instancia de ZodError
      if (error instanceof ZodError) {
        // Si es un error de Zod, enviar una respuesta con los errores de validación
        res.status(400).json({ error: error.errors });
      } else {
        // Si es otro tipo de error, enviar una respuesta genérica
        res.status(500).json({ error: "Ocurrió un error inesperado" });
      }
    }
  };

export default validateBody;
