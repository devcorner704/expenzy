import React from "react";
import { connect } from "react-redux";

export const HistoryAlerts_Neg = () => {
  return (
    // <div className="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex max-w-sm m-3 bg-white shadow-md rounded-none overflow-hidden">
      <div className="flex justify-center items-center bg-red-500">
        <svg
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
        </svg>
      </div>

      <div className="-mx-3 py-2 px-4">
        <div className="mx-3">
          <span className="text-red-500 font-semibold uppercase">
            VW car payment
          </span>
          <p className="text-gray-600 text-sm">-$ 200.00</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryAlerts_Neg);
