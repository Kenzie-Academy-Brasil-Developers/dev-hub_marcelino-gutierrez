import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

export const registerSchema = z
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
        "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial"
      ),

    confirmation: z.string().nonempty("Confirme sua senha!"),

    bio: z.string().nonempty("Insira sua bio"),

    contact: z.string().nonempty("Informação de contato é obrigatória"),
  })
  .refine(({ password, confirmation }) => confirmation === password, {
    message: "As senhas precisam corresponder",
    path: ["passwordConfirmation"],
  });

export type TRegisterSchemaValues = z.infer<typeof registerSchema>;
