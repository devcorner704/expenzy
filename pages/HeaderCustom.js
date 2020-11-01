import React, { Component } from "react";
import { connect } from "react-redux";
import MobileMenuCustom from "./MobileMenuCustom";

function NavbarCustom({ fixed }) {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-1 py-2 navbar-expand-lg bg-blue-500 mb-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button className="flex rounded text-sm font-bold uppercase items-center shadow-md bg-white pr-2 pl-0 py-1 text-blue-500 hover:bg-blue-400">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                />
              </svg>
              back
            </button>

            <a
              className="text-sm font-bold leading-relaxed inline-block mr-1 py-2 whitespace-no-wrap uppercase text-white"
              href="#p"
            >
              Sales Order Picking
            </a>

            <MobileMenuCustom />
            {/* <button
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
          </div>
          <*
            className={
              "lg:flex flex-grow items-center mt-1" +
              (navbarOpen
                ? " flex transition delay-150 duration-300 ease-linear"
                : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto w-full z-10">
              <li className="nav-item mb-1">
                <div className="w-full mx-auto px-1 py-2 bg-white rounded shadow-md">
                  <a
                    className="flex items-center text-xs uppercase font-bold leading-snug text-blue-500 hover:opacity-75"
                    href="#logs"
                  >
                    <span className="ml-2">logs</span>
                  </a>
                </div>
              </li>

              <li className="nav-item mb-1">
                <div className="w-full mx-auto px-1 py-2 bg-white rounded shadow-md">
                  <a
                    className="flex items-center text-xs uppercase font-bold leading-snug text-blue-500 hover:opacity-75"
                    href="#alert"
                  >
                    <span className="ml-2">alerts</span>
                  </a>
                </div>
              </li>

              <li className="nav-item mb-1">
                <div className="w-full px-1 py-2 bg-white rounded shadow-md">
                  <a
                    className="flex items-center text-xs uppercase font-bold leading-snug text-blue-500 hover:opacity-75"
                    href="#logout"
                  >
                    <span className="ml-2">log out</span>
                  </a>
                </div>
              </li>
            </ul>
          */}
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCustom);
