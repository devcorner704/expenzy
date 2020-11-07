import React from "react";
import { connect } from "react-redux";

export const LocationFilterCustom = () => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  const [accordionOpen2, setAccordionOpen2] = React.useState(false);
  const [accordionOpen3, setAccordionOpen3] = React.useState(false);

  return (
    <div>
      <div className="w-full my-4">
        <div className="rounded-sm">
          <div
            className="border border-b-0 bg-gray-100 px-10 py-6"
            id="headingOne"
          >
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              type="button"
            >
              Location: Florida
            </button>
          </div>
          <div
            className={`${
              accordionOpen ? "show" : "hidden"
            } border border-b-0 px-10 py-6`}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
        </div>
        <div className="rounded-sm">
          <div
            className="border border-b-0 bg-gray-100 px-10 py-6"
            id="headingOne"
          >
            <button
              onClick={() => setAccordionOpen2(!accordionOpen2)}
              className="underline text-blue-500 hover:text-blue-700 focus:outline-none"
              type="button"
            >
              Collapsible Group Item #2
            </button>
          </div>
          <div
            className={`${
              accordionOpen2 ? "show" : "hidden"
            } border border-b-0 px-10 py-6`}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
        </div>
        <div className="rounded-sm">
          <div className="border bg-gray-100 px-10 py-6" id="headingOne">
            <button
              onClick={() => setAccordionOpen3(!accordionOpen3)}
              className="underline text-blue-500 hover:text-blue-700 focus:outline-none"
              type="button"
            >
              Collapsible Group Item #3
            </button>
          </div>
          <div
            className={`${
              accordionOpen3 ? "show" : "hidden"
            } border border-b-0 px-10 py-6`}
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFilterCustom);
