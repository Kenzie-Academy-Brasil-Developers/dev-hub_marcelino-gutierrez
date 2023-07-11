import { ReactNode } from "react";

interface IBaseMain {
  loading: boolean;
  children: ReactNode;
}

export const BaseMain = ({ children, loading }: IBaseMain) => {
  return (
    <main
      className={`${
        loading ? "opacity-0" : "animate-fade-translate"
      } transition-opacity duration-1000 w-5/6 lg:w-1/2 mx-auto`}
    >
      {children}
    </main>
  );
};
