import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Header = ({ setCategory, setPage }) => {
  const categories = ["general", "business", "technology"];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header
      className="flex justify-between shadow-md py-4 px-6 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide  z-50 fixed  
                w-full top-0 left-0"
    >
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex gap-4 items-center">
        {/* Category button starts */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-[#1A21ED] hover:bg-gray-50">
              Categories
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {categories.map((cat) => (
                  <MenuItem>
                    {/* Switching categories btn */}
                    {({ focus }) => (
                      <button
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm w-full text-left font-semibold"
                        )}
                        key={cat}
                        onClick={() => {
                          setCategory(cat);
                          setPage(1);
                        }}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Transition>
        </Menu>
        {/* category button ends */}
        <div>
          <Link to="/favorites">
            <img src="/favorite.svg" alt="logo" className="text-[#1A21ED]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
