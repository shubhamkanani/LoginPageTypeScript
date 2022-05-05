import React from "react";

function Header() {
  return (
    <div className="shadow-xl my-2">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            style={{ color: "#51189A" }}
          >
            Company Name
          </span>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  SIGN IN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#AFE9FF" }}
                  className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  PROGRAM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#AFE9FF" }}
                  className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#AFE9FF" }}
                  className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  BECOME A PARTNER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
