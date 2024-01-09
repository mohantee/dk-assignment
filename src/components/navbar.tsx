import logo from "@/assets/logo.png";
import chevronDown from "@/assets/chevron-down.svg";
import { cn } from "@/lib/utils";
import wallet from "@/assets/wallet.svg";
import { NAV_ITEMS } from "@/constants";

export function Navbar() {
  return (
    <header className="bg-secondary sticky top-0 hidden h-screen w-[14rem] flex-col overflow-scroll p-4 lg:flex">
      <div className="mb-7 flex items-center gap-3">
        <img src={logo} className="w-11 cursor-pointer rounded-sm" alt="" />
        <div>
          <h1 className="text-white">Nishyan</h1>
          <a
            className="cursor-pointer text-sm text-white/80 underline"
            href="#"
          >
            Visit store
          </a>
        </div>
        <button className="ml-auto">
          <img src={chevronDown} alt="" />
        </button>
      </div>
      <nav className="mb-4 flex-1">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li className="text-sm font-medium text-white/80" key={item.name}>
              <a
                href="#"
                className={cn(
                  `flex items-center gap-3 rounded px-4 py-2 hover:bg-white/5`,
                  item.name === "Payments" && "bg-white/10 hover:bg-white/10",
                )}
              >
                <img src={item.src} />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-3 rounded bg-white/10 p-3">
        <img
          src={wallet}
          alt=""
          className="rounded bg-white/10 px-[10px] py-[6px]"
        />
        <div className="flex w-full flex-col">
          <p className="text-sm text-white/80">Available credits</p>
          <p className="text-white ">222.10</p>
        </div>
      </div>
    </header>
  );
}
