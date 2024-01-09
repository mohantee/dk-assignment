import { Card, CardContent, Command, CommandInput } from "@/components/ui";
import menuIcon from "@/assets/menu.svg";
import helpIcon from "@/assets/help.svg";
import groupIcon from "@/assets/group.svg";
export function Appbar() {
  return (
    <Card className="static top-0 z-10 rounded-none border-b md:sticky">
      <CardContent className="flex flex-col items-center justify-between gap-4 px-8 py-3 md:flex-row md:gap-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[0.9375rem]">Payments</h2>
          <button className="flex cursor-help items-center gap-[6px] text-black/70">
            <img
              src={helpIcon}
              alt=""
              className="h-[14px] w-[14px] lg:inline"
            />
            <p className="text-xs lg:block">How it works?</p>
          </button>
        </div>
        <Command className="max-w-96 rounded-lg border border-none bg-black/5">
          <CommandInput placeholder="Search features, tutorials, etc." />
        </Command>
        <div className="flex gap-3">
          <button>
            <img src={groupIcon} alt="" className="h-10 w-10 lg:inline" />
          </button>
          <button>
            <img src={menuIcon} alt="" className="h-10 w-10 lg:inline" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
