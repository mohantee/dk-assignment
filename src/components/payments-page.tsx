import { SelectInterval, TransactionList } from "@/components/";
import { Card, CardHeader, CardContent } from "@/components/ui";

export function PaymentsPage() {
  return (
    <>
      <section className="mb-8 px-4 pt-8 lg:px-8">
        <div className="w-34 mb-7 flex items-center justify-between">
          <h3 className="text-xl font-medium text-black/85">Overview</h3>
          <SelectInterval />
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <Card className="w-full">
            <CardHeader>
              <h4 className="text-black/70">Online orders</h4>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-medium text-black/90">231</p>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <h4 className="text-black/70">Amount received</h4>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-medium text-black/90">
                ₹23,92,312.19
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="px-4 pb-8 lg:px-8">
        <h3 className="mb-6 text-xl font-medium text-black/85">
          Transactions | This Month
        </h3>
        <TransactionList />
      </section>
    </>
  );
}
