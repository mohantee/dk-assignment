import {
  Card,
  CardContent,
  Command,
  CommandInput,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  CommandList,
} from "@/components/ui";
import menuIcon from "@/assets/menu.svg";
import helpIcon from "@/assets/help.svg";
import groupIcon from "@/assets/group.svg";
export function Appbar() {
  return (
    <Card className="static top-0 z-10 rounded-none border-b md:sticky">
      <CardContent className="flex flex-col items-center justify-between gap-4 px-8 py-3 md:flex-row md:gap-0">
        <div className="flex items-center gap-4">
          <h2 className="text-[0.9375rem]">Payments</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-[6px] text-black/70">
                <img
                  src={helpIcon}
                  alt=""
                  className="h-[14px] w-[14px] lg:inline"
                />
                <p className="text-xs">How it works</p>
              </TooltipTrigger>
              <TooltipContent className="bg-black/70 text-white">
                <p className="text-xs">
                  Transaction fees are charged as a percentage of the order
                  amount according to your plan.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Command className="max-w-96 rounded-lg border border-none bg-black/5">
          <CommandInput placeholder="Search features, tutorials, etc." />
          <CommandList />
        </Command>
        <div className="flex gap-3">
          <button aria-label="Messages">
            <img src={groupIcon} alt="" className="h-10 w-10 lg:inline" />
          </button>
          <button aria-label="Menu">
            <img src={menuIcon} alt="" className="h-10 w-10 lg:inline" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
