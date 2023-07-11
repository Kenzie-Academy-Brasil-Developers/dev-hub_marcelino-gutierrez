import { ReactNode } from "react";

interface IFormComponentProps {
  children: ReactNode;
}

export const FormComponent = ({ children }: IFormComponentProps) => {
  return (
    <div className="w-full sm:w-3/4 md:w-2/3 xl:w-1/2 text-center mx-auto my-24 bg-base-200 p-6 rounded-sm flex flex-col justify-self-center gap-5">
      {children}
    </div>
  );
};
