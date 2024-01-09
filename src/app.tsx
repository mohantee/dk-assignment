import { Appbar, Navbar } from "./components";
import { PaymentsPage } from "./components/payments-page";

function App() {
  return (
    <div className="bg-background flex min-h-screen">
      <Navbar />
      <main className="w-full lg:w-[calc(100vw-14rem)]">
        <Appbar />
        <PaymentsPage />
      </main>
    </div>
  );
}

export default App;
