import React from "react";
import { connect } from "react-redux";

export const MobileMenuDropdownCustom = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  //   Get the modal
  //   var elTarget = document.getElementById("mobile-menu");

  // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function (event) {
  //     console.log("evnt ", event.target);
  //     if (event.target !== elTarget) {
  //       setNavbarOpen(!navbarOpen);
  //     }
  //   };

  return (
    <>
      <div className="relative">
        {/* <!-- Dropdown toggle button --> */}
        <button
          className="text-white cursor-pointer text-xl leading-none px-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div
          className={`${
            navbarOpen ? "block" : "hidden"
          } absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20`}
          id="mobile-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            your profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Your Orders
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Help
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Sign Out
          </a>
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
)(MobileMenuDropdownCustom);
