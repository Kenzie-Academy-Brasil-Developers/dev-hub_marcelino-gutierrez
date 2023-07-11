import { Link } from "react-router-dom";
import { Navbar } from "../components/general/Navbar";
import { BaseContainer } from "../components/general/BaseContainer";
import { BaseMain } from "../components/general/BaseMain";
import { useEffect, useState } from "react";
import { LoginForm } from "../components/login/LoginForm";
import { Logo } from "../components/general/Logo";
import { FormComponent } from "../components/general/FormComponent";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <BaseContainer>
        <Navbar>
          <Logo />
        </Navbar>
        <BaseMain loading={loading}>
          <FormComponent>
            <h2 className="text-xl font-thin select-none tracking-widest py-2">
              Login
            </h2>
            <LoginForm />
            <span className="font-thin tracking-wide">
              Ainda não possui uma conta?
            </span>
            <Link
              to="/register"
              className="btn btn-secondary uppercase tracking-widest text-primary-content w-full"
            >
              Cadastre-se
            </Link>
          </FormComponent>
        </BaseMain>
      </BaseContainer>
    </>
  );
};
