import React from "react";
import { connect } from "react-redux";
// import setGlobalAmount from "../redux/actions";

export const BalanceDisplay = ({ amount }) => {
  return (
    <>
      <section className="title-section">
        <div className="mb-5 mt-5 text-2xl text-center font-extrabold text-gray-800 leading-none sm:text-4xl">
          Expenzee
          <br />
          <span className="text-gray-700 text-sm text-center">
            budget tracker
          </span>
        </div>
      </section>
      <section className="balance-display-text">
        <div className="flex flex-col">
          <div className="font-mono font-bold px-2 text-lg text-gray-700 leading-none">
            Your Balance
          </div>
          <div className="font-mono font-bold px-2 text-xl text-gray-800 leading-1">
            $ {amount}
          </div>
        </div>
      </section>
      <section className="income-expense-display">
        <div className="flex flex-row">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center px-6 py-1 bg-green-600">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h1 className="mx-3 text-white font-semibold uppercase text-sm">
                income
              </h1>
            </div>

            <div className="py-4 px-6">
              <h1 className="text-base font-semibold text-gray-800">
                $ {amount}
              </h1>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center px-6 py-1 bg-red-500">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>

              <h1 className="mx-3 text-white font-semibold uppercase text-sm">
                expense
              </h1>
            </div>

            <div className="py-4 px-6">
              <h1 className="text-base font-semibold text-gray-800">$ 740</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  amount: state.amount.value,
});

const mapDispatchToProps = {
  // setGlobalAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceDisplay);
