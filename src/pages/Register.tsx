import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BaseContainer } from "../components/general/BaseContainer";
import { BaseMain } from "../components/general/BaseMain";
import { RegisterForm } from "../components/register/RegisterForm";
import { Logo } from "../components/general/Logo";
import { Navbar } from "../components/general/Navbar";
import { FormComponent } from "../components/general/FormComponent";

export const Register = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BaseContainer>
      <Navbar>
        <Logo />
      </Navbar>
      <BaseMain loading={loading}>
        <FormComponent>
          <div className="flex flex-wrap justify-between gap-4 items-center py-2">
            <h2 className="text-xl font-thin select-none tracking-widest">
              Cadastro
            </h2>
            <Link
              to="/"
              className="btn btn-secondary sm:btn-md text-primary-content flex items-center gap-2 tracking-widest self-start"
            >
              <BiArrowBack />
              Voltar
            </Link>
          </div>
          <RegisterForm />
        </FormComponent>
      </BaseMain>
    </BaseContainer>
  );
};
