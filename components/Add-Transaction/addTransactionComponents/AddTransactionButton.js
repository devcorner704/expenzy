import React, { Component } from "react";
import { connect } from "react-redux";

export const AddTransactionButton = () => {
  return (
    <div>
      <button className="w-11/12 m-3 p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-700 rounded-lg focus:outline-none focus:shadow-outline">
        add transaction
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionButton);
