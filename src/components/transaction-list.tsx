import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
  Command,
  CommandInput,
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

  const fetchTransactions = async () => {
    try {
      const response = await fetch("/transactions.json");
      const transactions = await response.json();
      setTransactions(transactions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Card>
      <CardContent className="p-0 md:pb-6 md:pt-0 lg:px-3">
        <Header />
        <Table className="mb-6">
          <TableHeader className="rounded-lg bg-black/5">
            <TableRow>
              <TableCell className="text-black/70">Order ID</TableCell>
              <TableCell className="flex items-start gap-1 text-black/70">
                Order date <span className="text-[8px]">▼</span>
              </TableCell>
              <TableCell className="text-right text-black/70">
                Order amount
              </TableCell>
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
      <div className="flex-col justify-between md:flex-row md:items-center lg:flex">
        <Command className="mx-auto my-3 min-w-[248px] max-w-96 rounded-lg border lg:mx-0">
          <CommandInput placeholder="Search by order ID..." />
        </Command>
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center lg:mb-0">
          <Button
            variant="outline"
            size="sm"
            className="gap-[0.375rem] font-light"
          >
            Sort
            <img src={sortIcon} alt="" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-[0.375rem] px-2 font-light"
          >
            <img src={downloadIcon} alt="" />
          </Button>
        </div>
      </div>
    </CardHeader>
  );
}
