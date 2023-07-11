import { useContext } from "react";
import { TechContext } from "../../provider/TechContext";

interface ITechnologyCardProps {
  title: string;
  proficiency: string;
  id: string;
}

export const TechnologyCard = ({
  proficiency,
  title,
  id,
}: ITechnologyCardProps) => {
  const { editTechModalRef, selectTech } = useContext(TechContext);
  return (
    <div
      onClick={() => {
        editTechModalRef.current?.showModal();
        selectTech(id);
      }}
      className="flex bg-base-300 p-4 justify-between rounded-md hover:shadow-md hover:bg-primary hover:scale-[101%] transition-all duration-300 cursor-pointer"
    >
      <span className="font-semibold tracking-widest uppercase">{title}</span>
      <span className=" text-gray-400 tracking-widest">{proficiency}</span>
    </div>
  );
};
