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
    <PaginationContainer className="mx-auto hidden lg:flex">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="border-[1px] border-black/15"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="bg-primary hover:bg-primary text-white hover:text-white"
          >
            10
          </PaginationLink>
        </PaginationItem>
        {NUMBERS.map((number) => (
          <PaginationItem key={number}>
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
