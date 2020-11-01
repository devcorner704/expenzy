import React, { Component } from "react";
import { connect } from "react-redux";

export const InputFieldCustom = () => {
  return (
    <div className="m-10 uppercase">
      <label
        className="block text-gray-600 text-sm font-medium mb-2"
        htmlFor="LoggingEmailAddress"
      >
        enter sales order number
      </label>
      <input
        id="salesOrderNumber"
        className="bg-white text-gray-700 border border-gray-500 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InputFieldCustom);
