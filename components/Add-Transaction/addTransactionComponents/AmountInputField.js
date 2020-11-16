import React from "react";
import { connect } from "react-redux";
import { setGlobalAmount } from "../../../redux/actions";

function AmountInputField({ setGlobalAmount, amount }) {
  // const [newAmount, setNewAmount] = React.useState("");

  React.useEffect(() => {
    console.log("heoo" + JSON.stringify(amount));
  }, []);

  const handleNewAmount = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setGlobalAmount(e.target.value);
    // setNewAmount(e.target.value);
  };

  return (
    <div className="mt-3">
      <span className="text-sm m-3 font-bold text-gray-600 uppercase">
        amount{" "}
      </span>
      <span className="text-sm italic break-normal text-gray-500">
        +positive = income | -negative = expense
      </span>
      <input
        value={amount}
        onChange={(e) => handleNewAmount(e)}
        className="w-11/12 p-3 mr-3 ml-3 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Amount"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  amount: state.amount.value,
});

export default connect(mapStateToProps, { setGlobalAmount })(AmountInputField);
