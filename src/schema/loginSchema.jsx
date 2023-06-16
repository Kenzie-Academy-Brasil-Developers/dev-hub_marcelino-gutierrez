import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const courseModuleOptions = [
  "Primeiro módulo (Introdução ao Frontend)",
  "Segundo módulo (Frontend Avançado)",
  "Terceiro módulo (Introdução ao Backend)",
  "Quarto módulo (Backend Avançado)",
];

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Insira o email")
    .email("O formato de email inserido é inválido"),
  password: z.string().nonempty("Insira a senha"),
});
