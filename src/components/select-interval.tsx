import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui";

export function SelectInterval() {
  return (
    <Select>
      <SelectTrigger
        className="w-[135px] bg-white font-light"
        aria-label="Select time interval"
      >
        <SelectValue placeholder="Select interval" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="week">Last Week</SelectItem>
        <SelectItem value="month">Last Month</SelectItem>
        <SelectItem value="year">Last Year</SelectItem>
      </SelectContent>
    </Select>
  );
}
