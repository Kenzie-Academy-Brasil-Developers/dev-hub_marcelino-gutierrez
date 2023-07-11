import { UseFormRegister, FieldErrors } from "react-hook-form";

type TName =
  | "name"
  | "email"
  | "password"
  | "confirmation"
  | "bio"
  | "contact"
  | "title"
  | "status";

interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: TName;
  type: string;
  placeholder: string;
  disabled: boolean;
  defaultValue: string | undefined;
}

export const FormTextInput = ({
  register,
  errors,
  name,
  type,
  placeholder,
  disabled,
  defaultValue,
}: IFormTextInputProps) => {
  return (
    <div className="form-control w-full">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        autoComplete="current-password"
        defaultValue={defaultValue}
        disabled={disabled}
        className={`input w-full rounded-sm border-2 outline-none focus:outline-none ${
          errors[name]
            ? "focus:border-error border-error"
            : "focus:border-primary"
        } placeholder:uppercase placeholder:tracking-widest transition-all duration-300 bg-base-100`}
      />
      <span className="text-error text-left text-xs">
        {errors[name]?.message?.toString()}
      </span>
    </div>
  );
};
