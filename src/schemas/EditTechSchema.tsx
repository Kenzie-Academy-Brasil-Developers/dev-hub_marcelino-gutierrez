import { z } from "zod";

export const editTechSchema = z.object({
  status: z.string().nonempty("Selecione o seu nível de proficiência"),
});

export type TEditTechSchemaValues = z.infer<typeof editTechSchema>;
