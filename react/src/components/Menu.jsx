import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function PriorityMenu() {
  const [selectedPriority, setSelectedPriority] = useState("Priority");

  const handleSelect = (priority) => {
    setSelectedPriority(priority);
  };

  return (
    <Menu as="div" className="relative inline-block text-left ms-2">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-neutral-950 px-3 py-[2px] text-sm text-white ring-1 ring-white ring-opacity-50 cursor-pointer focus:outline-none">
          {selectedPriority}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-white"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-neutral-900 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm text-white ${
                  active ? "bg-red-950/50" : ""
                }`}
                onClick={() => handleSelect("Priority 1")}
              >
                <i className="bx bxs-flag me-1 text-red-500 text-md"></i>
                Priority 1
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm text-white ${
                  active ? "bg-red-950/50" : ""
                }`}
                onClick={() => handleSelect("Priority 2")}
              >
                <i className="bx bxs-flag me-1 text-yellow-500 text-md"></i>
                Priority 2
              </a>
            )}
          </MenuItem>
        </div>
        <div>
          <MenuItem>
            {({ active }) => (
              <label
                value="Priority 3"
                id="p3"
                className={`block px-4 py-2 text-sm text-white ${
                  active ? "bg-red-950/50" : ""
                }`}
                onClick={() => handleSelect("Priority 3")}
              >
                <i className="bx bxs-flag me-1 text-blue-500 text-md"></i>
                Priority 3
              </label>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
