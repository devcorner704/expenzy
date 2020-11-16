import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTransactionButton } from "./addTransactionComponents/AddTransactionButton";
import AmountInputField from "./addTransactionComponents/AmountInputField";
import { TextLabelInput } from "./addTransactionComponents/TextLabelInput";

export const AddNewTransaction = () => {
  return (
    <section className="addnewtransaction mt-3 mb-2">
      <div className="font-mono font-bold px-2 text-lg text-gray-700 leading-none border-b-2 rounded-sm">
        Add New Transaction
      </div>
      <TextLabelInput />
      <AmountInputField />
      <AddTransactionButton />
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTransaction);
