import SearchOreder from "../features/order/SearchOreder";
import Username from "./Username";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-yellow-500 bg-yellow-400 px-4 py-3 font-serif uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOreder />
      <Username />
    </header>
  );
}

export default Header;
