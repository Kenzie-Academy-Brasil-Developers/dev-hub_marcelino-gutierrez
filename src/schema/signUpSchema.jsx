import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.]).{8,}$/;
const courseModuleOptions = [
  "Primeiro módulo (Introdução ao Frontend)",
  "Segundo módulo (Frontend Avançado)",
  "Terceiro módulo (Introdução ao Backend)",
  "Quarto módulo (Backend Avançado)",
];

export const signUpSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(2, "O nome precisa conter pelo menos dois caractéres"),

    email: z.string().email("O formato de email inserido é inválido"),

    password: z
      .string()
      .min(8, "A senha precisa ter mais de 8 caracteres")
      .refine(
        (value) => passwordRegex.test(value),
        "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula e um caractere especial"
      ),

    passwordConfirmation: z.string(),

    bio: z.string().nonempty("Insira sua bio"),

    contact: z
      .string()
      .nonempty("O número é obrigatório")
      .length(11, "Insira o número completo, incluindo o DDD"),

    course_module: z
      .string()
      .refine((value) => courseModuleOptions.includes(value), {
        message: "Por favor, selecione uma opção válida",
      }),
  })
  .refine(
    ({ password, passwordConfirmation }) => passwordConfirmation === password,
    {
      message: "As senhas precisam corresponder",
      path: ["passwordConfirmation"],
    }
  );
