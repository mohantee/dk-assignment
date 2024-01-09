import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
  Command,
  CommandInput,
  CommandList,
  CardHeader,
  Button,
} from "@/components/ui";

import { Transaction } from "@/types";
import sortIcon from "@/assets/sort.svg";
import downloadIcon from "@/assets/download.svg";
import infoIcon from "@/assets/info.svg";
import { useEffect, useState } from "react";
import { Pagination } from "./pagination";

export function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/transactions.json");
      const transactions = await response.json();
      setTransactions(transactions);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (isLoading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  return (
    <Card>
      <CardContent className="p-0 pb-4 lg:px-3 lg:pb-6 lg:pt-0">
        <Header />
        <Table className="mb-6">
          <TableHeader className="rounded-lg bg-black/5">
            <TableRow>
              <TableHead className="text-black/70">Order ID</TableHead>
              <TableHead className="flex items-start gap-1 text-black/70">
                Order date <span className="text-[8px]">▼</span>
              </TableHead>
              <TableHead className="text-right text-black/70">
                Order amount
              </TableHead>
              <TableCell className="flex items-start justify-end gap-1 text-black/70">
                Transaction fees
                <img
                  src={infoIcon}
                  alt=""
                  className="hidden self-center lg:inline"
                />
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="text-primary">
                  #{transaction.order_id}
                </TableCell>
                <TableCell>{transaction.order_date}</TableCell>
                <TableCell className="text-right">
                  {transaction.order_amount}
                </TableCell>
                <TableCell className="text-right">
                  {transaction.transaction_fees}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination />
      </CardContent>
    </Card>
  );
}

function Header() {
  return (
    <CardHeader className="p-0 px-6 lg:px-0">
      <div className="flex-col justify-between lg:flex lg:flex-row lg:items-center">
        <Command className="mx-auto my-3 min-w-[248px] max-w-96 rounded-lg border lg:mx-0">
          <CommandInput placeholder="Search by order ID..." />
          <CommandList />
        </Command>
        <div className="mb-4 flex flex-col gap-3 lg:mb-0 lg:flex-row lg:items-center">
          <Button
            variant="outline"
            size="sm"
            className="gap-[0.375rem] font-light"
            aria-label="Sort"
          >
            Sort
            <img src={sortIcon} alt="" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-[0.375rem] px-2 font-light"
            aria-label="Export as CSV"
          >
            <img src={downloadIcon} alt="" />
          </Button>
        </div>
      </div>
    </CardHeader>
  );
}
