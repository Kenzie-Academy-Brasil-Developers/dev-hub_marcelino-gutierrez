import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Insira o email")
    .email("O formato de email inserido é inválido"),
  password: z.string().nonempty("Insira a senha"),
});
