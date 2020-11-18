import React, { Component } from "react";
import { connect } from "react-redux";
import ModalTransaction from "../Add-Trans-Modal/ModalTransaction";

export const AddNewTransaction = () => {
  return (
    <section className="addnewtransaction mt-3 mb-2">
      <div className="font-mono font-bold px-2 text-lg text-gray-700 leading-none border-b-2 rounded-sm">
        Add New Transaction
      </div>
      <ModalTransaction />
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTransaction);
