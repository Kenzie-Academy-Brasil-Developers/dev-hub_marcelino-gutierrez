export function Header({ userInfo }) {
  return (
    <header className="border-b border-b-stone-800 py-10">
      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto flex justify-between transition-all duration-1000">
        <h1 className="text-xl font-semibold">{`Olá, ${userInfo?.name} `}</h1>
        <span className="text-sm text-gray-400">{userInfo?.course_module}</span>
      </div>
    </header>
  );
}
