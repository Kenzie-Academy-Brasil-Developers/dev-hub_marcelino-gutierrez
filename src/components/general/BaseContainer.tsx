import { ReactNode } from "react";

interface IBaseContainer {
  children: ReactNode;
}

export const BaseContainer = ({ children }: IBaseContainer) => {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-base-300 overflow-hidden relative">
      {children}
    </div>
  );
};
