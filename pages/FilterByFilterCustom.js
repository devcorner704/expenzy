import React from "react";
import { connect } from "react-redux";

export const FilterByFilterCustom = () => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  return (
    <>
      <div className="w-full mb-3">
        <div className="rounded-sm">
          <div className="flex items-center justify-between border border-b-0 bg-gray-100 text-gray-600 text-sm font-medium px-1 py-1">
            Filter By: -All-
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold uppercase shadow hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded"
            >
              select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByFilterCustom);
