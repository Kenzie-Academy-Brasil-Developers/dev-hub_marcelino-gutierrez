import { useContext } from "react";
import { TechContext } from "../../provider/TechContext";
import { TechnologyCard } from "./TechnologyCard";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { UserContext } from "../../provider/UserContext";

export const TechnologyList = () => {
  const { user } = useContext(UserContext);
  const { addTechModalRef } = useContext(TechContext);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-2xl font-thin tracking-widest uppercase">
            Tecnologias
          </h2>

          <button
            onClick={() => addTechModalRef.current?.showModal()}
            className="btn btn-ghost "
          >
            <AiOutlinePlusCircle className="text-3xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-base-200 p-4 min-h-[24rem]">
        {user?.techs && user.techs.length < 1 ? (
          <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 tracking-widest text-gray-400">
            Não há tecnologias cadastradas
          </span>
        ) : (
          user?.techs?.map((tech) => (
            <TechnologyCard
              key={tech.title}
              title={tech.title}
              proficiency={tech.status}
              id={tech.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
