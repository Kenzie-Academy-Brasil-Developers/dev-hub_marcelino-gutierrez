import { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type TName = "status";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: TName;
  defaultValue: string | undefined;
}

export const FormSelectInput = ({
  register,
  errors,
  name,
  defaultValue,
}: IFormTextInputProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  return (
    <div className="form-control w-full">
      <select
        {...register(name)}
        onChange={(e) => setCurrentValue(e.target.value)}
        value={currentValue}
        className={`select w-full rounded-sm border-2 outline-none focus:outline-none ${
          errors[name]
            ? "focus:border-error border-error"
            : "focus:border-primary"
        } uppercase font-thin tracking-widest transition-all duration-300 bg-base-100`}
      >
        <option value="">Proficiência</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <span className="text-error text-left text-xs">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  );
};
