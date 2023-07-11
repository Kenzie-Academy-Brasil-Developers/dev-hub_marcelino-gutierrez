import { z } from "zod";

export const addTechSchema = z.object({
  title: z.string().nonempty("Insira o nome da tecnologia"),
  status: z.string().nonempty("Selecione o seu nível de proficiência"),
});

export type TAddTechSchemaValues = z.infer<typeof addTechSchema>;
