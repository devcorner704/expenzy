// import Nav from "../components/nav";
import { useDispatch } from "react-redux";
import { AddNewTransaction } from "../components/Add-Transaction/AddNewTransaction";
// import Example from "../components/clock-example/example";
import BalanceDisplay from "../components/BalanceDisplay";
import { HistoryDisplay } from "../components/History-Components/HistoryDisplay";
import { startClock } from "../redux/actions";

export default function IndexPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <div className="container mx-auto bg-gray-100">
      <BalanceDisplay />
      <HistoryDisplay />
      <AddNewTransaction />
    </div>
  );
}
