import LinkComp from "./LinkComp";

const NavBar = () => {
  return (
    <div className="fixed top-4 grid grid-cols-3 gap-2 w-96 items-center p-2 rounded-full z-20 bg-lgray scale-[.80]">
      <LinkComp text="Home" href="#" isActive={true} />
      <LinkComp text="Profile" href="#" isActive={false} />
      <LinkComp text="Contact" href="#" isActive={false} />
    </div>
  );
};

export default NavBar;
