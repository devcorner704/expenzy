import { AddNewTransaction } from "../components/Add-Transaction/AddNewTransaction";
import BalanceDisplay from "../components/BalanceDisplay";
import { HistoryDisplay } from "../components/History-Components/HistoryDisplay";

export default function IndexPage() {
  return (
    <div className="container mx-auto bg-gray-100">
      <BalanceDisplay />
      <AddNewTransaction />
      <HistoryDisplay />
    </div>
  );
}
