import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui";

const NUMBERS = [11, 12, 13, 14, 15, 16, 17, 18];

export function Pagination() {
  return (
    <PaginationContainer className="mx-auto lg:flex">
      <PaginationContent className="gap-4 lg:gap-0">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="border-[1px] border-black/15"
          />
        </PaginationItem>
        <PaginationItem className="hidden lg:block">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden lg:block">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hidden lg:block">
          <PaginationLink
            href="#"
            isActive
            className="bg-primary hover:bg-primary text-white hover:text-white"
          >
            10
          </PaginationLink>
        </PaginationItem>
        {NUMBERS.map((number) => (
          <PaginationItem key={number} className="hidden lg:block">
            <PaginationLink href="#">{number}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" className="border-[1px] border-black/15" />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
}
