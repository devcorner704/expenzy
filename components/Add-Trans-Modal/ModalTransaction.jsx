import React from "react";
import { connect } from "react-redux";
import {
  setExpense,
  setIncome,
  setCurrentLabel,
  setCurrentTransactionType,
} from "../../redux/actions";

const ModalTrasactions = ({
  setIncome,
  setExpense,
  setCurrentLabel,
  setCurrentTransactionType,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [localTextLabel, setLocalTextLabel] = React.useState("");
  const [localAmount, setLocalAmount] = React.useState("");
  const [openDropdownSelection, setOpenDropdownSelection] = React.useState(
    false
  );
  const [localTransactionType, setLocalTransactionType] = React.useState(
    "transaction type"
  );
  const closeBTN = (e) => {
    e.preventDefault();
    setLocalTransactionType("transaction type");
    setLocalAmount("");
    setLocalTextLabel("");
    setShowModal(false);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    if (localTransactionType !== "transaction type") {
      setCurrentTransactionType(localTransactionType);
      if (localTransactionType === "income") {
        if (localTextLabel && localAmount) {
          setCurrentLabel(localTextLabel);
          setIncome(localAmount);
        }
      }
      if (localTransactionType === "expense") {
        if (localTextLabel && localAmount) {
          setCurrentLabel(localTextLabel);
          setExpense(localAmount);
        }
      }
      closeBTN(e);
    }

    //for now use this but it should be replaced by a 'Toast' warning message
    closeBTN(e);
  };

  const handleTransTypeSelection = (e, type = "none") => {
    e.preventDefault();
    setOpenDropdownSelection(!openDropdownSelection);

    if (type !== "none") {
      setLocalTransactionType(type);
    }
  };

  return (
    <div>
      <button
        className="bg-indigo-700 w-11/12 m-3 p-3 text-sm font-bold tracking-wide text-gray-100 uppercase 
          rounded-lg focus:outline-none focus:shadow-outline"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        add new transaction
      </button>
      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Transaction</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={(e) => closeBTN(e)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="px-4 text-xs bg-gray-50 sm:px-6 sm:flex-row-reverse">
                    <form className="mt-4">
                      <div className="relative">
                        {/* Dropdown toggle button */}
                        <button
                          onClick={(e) => handleTransTypeSelection(e)}
                          className={`flex rounded mb-2 text-white 
                        ${
                          localTransactionType == "income"
                            ? "bg-green-600"
                            : localTransactionType == "expense"
                            ? "bg-red-500"
                            : "bg-indigo-700"
                        }
                          
                          uppercase text-sm shadow-xl p-2 focus:outline-none`}
                        >
                          {localTransactionType}
                          <span className="relative z-10 ml-1">
                            <svg
                              className="h-5 w-5 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>

                        {/* Dropdown menu  */}
                        <div
                          className={`${
                            openDropdownSelection ? "" : "hidden"
                          } absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`}
                        >
                          <div
                            onClick={(e) =>
                              handleTransTypeSelection(e, "income")
                            }
                            className="block px-2 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                          >
                            Income (+)
                          </div>
                          <div
                            onClick={(e) =>
                              handleTransTypeSelection(e, "expense")
                            }
                            className="block px-2 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                          >
                            Expense (-)
                          </div>
                        </div>
                      </div>

                      <label htmlFor="label-name" className="block">
                        <span className="font-sans text-sm text-gray-700">
                          Add Label
                        </span>
                        <input
                          value={localTextLabel}
                          onChange={(e) => setLocalTextLabel(e.target.value)}
                          type="text"
                          autoComplete="label-name"
                          className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                          required
                        />
                      </label>
                      <label htmlFor="current-amount" className="block mt-3">
                        <span className="font-sans text-sm text-gray-700">
                          Amount
                        </span>
                        <input
                          value={localAmount}
                          onChange={(e) => setLocalAmount(e.target.value)}
                          type="number"
                          autoComplete="current-amount"
                          className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md form-input focus:border-indigo-600"
                          required
                        />
                      </label>
                      <div className="mt-6">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={(e) => closeBTN(e)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                          onClick={(e) => handleSaveChanges(e)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setExpense,
  setIncome,
  setCurrentLabel,
  setCurrentTransactionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalTrasactions);
