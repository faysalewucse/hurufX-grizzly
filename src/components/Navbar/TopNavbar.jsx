import MenuButton from "../Animations/MenuButton/MenuButton";
import Brand from "../Brand";

function TopNavbar() {
  return (
    <div className="fixed w-full top-0">
      <div className="p-10 flex items-center justify-between">
        <Brand />
        <MenuButton />
      </div>
    </div>
  );
}

export default TopNavbar;
