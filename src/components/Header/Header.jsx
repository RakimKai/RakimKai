import Arrow from "../Icons/Arrow";
const Header = () => {
  return (
    <>
      <header className="2xl:text-[8rem] sm:text-[4rem] text-[3rem] flex flex-col justify-center items-center  sm:pl-14 2xl:pt-32 pt-14 ">
        <h1 className="animate-fade-in leading-none font-extrabold">
          Full Stack
        </h1>
        <h2 className="animate-fade-in leading-none font-extrabold">
          Web Developer
        </h2>
        <h2 className="animate-slideInThird 2xl:text-[4rem] sm:text-[3rem] text-[2rem] text-center font-bold text-secondary 2xl:pt-8 pt-3 opacity-0">
          with a continuous drive for learning and creating
        </h2>
      </header>
      <div className="flex justify-center items-center 2xl:pt-16 pt-8 2xl:pb-[100px] pb-10 h-[250px] 2xl:h-[400px] animate-slideInTop opacity-0">
        <Arrow />
      </div>
    </>
  );
};

export default Header;
