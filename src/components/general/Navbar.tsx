import React, { ReactNode } from "react";

interface INavbar {
  children: ReactNode;
}

export const Navbar = ({ children }: INavbar) => {
  return (
    <nav
      className={`w-5/6 lg:w-1/2 absolute top-[3%] right-1/2 translate-x-1/2 flex ${
        React.Children.count(children) > 1
          ? "justify-between"
          : "justify-center"
      } items-center`}
    >
      {children}
    </nav>
  );
};
