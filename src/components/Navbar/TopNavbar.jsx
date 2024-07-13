import MenuButton from "../Animations/MenuButton/MenuButton";

function TopNavbar() {
  return (
    <div className="p-10 flex items-center justify-between">
      <h1 className="font-semibold text-white text-4xl z-[99]">HURUF</h1>
      <MenuButton />
    </div>
  );
}

export default TopNavbar;
