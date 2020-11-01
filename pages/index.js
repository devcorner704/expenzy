// import Nav from "../components/nav";
import { useDispatch } from "react-redux";
// import Example from "../components/clock-example/example";
import { startClock } from "../redux/actions";
import HeaderCustom from "../pages/HeaderCustom";
import FooterCustom from "./FooterCustom";
import InputFieldCustom from "./InputFieldCustom";
import LocationFilterCustom from "./LocationFilterCustom";
import PickerFilterCustom from "./PickerFilterCustom";
import FilterByFilterCustom from "./FilterByFilterCustom";
import ShipViaFilterCustom from "./ShipViaFilterCustom";

export default function IndexPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <HeaderCustom />
      <InputFieldCustom />
      <LocationFilterCustom />
      <PickerFilterCustom />
      <FilterByFilterCustom />
      <ShipViaFilterCustom />
      <div className="fixed inset-x-0 bottom-0">
        <FooterCustom />
      </div>
    </div>
  );
}
