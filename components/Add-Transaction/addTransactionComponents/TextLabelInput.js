import React from "react";
import { connect } from "react-redux";

export const TextLabelInput = () => {
  return (
    <div className="mt-3">
      <span className="text-sm m-3 font-bold text-gray-600 uppercase">
        transaction name
      </span>
      <input
        className="w-11/12 p-3 mr-3 ml-3 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Transaction name"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TextLabelInput);
