import React from "react";
import { connect } from "react-redux";
import { HistoryAlerts } from "./hist-comp/HistoryAlerts";
import { HistoryAlerts_Neg } from "./hist-comp/HistoryAlerts_Neg";

export const HistoryDisplay = () => {
  return (
    <>
      <section className="history-section mt-3 mb-2">
        <div className="font-mono font-bold px-2 text-lg text-gray-700 leading-none border-b-2 rounded-sm">
          History
        </div>
        <HistoryAlerts />
        <HistoryAlerts_Neg />
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDisplay);
