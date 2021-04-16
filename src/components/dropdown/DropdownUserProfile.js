import React from "react";
import { NavLink } from "react-router-dom";

const DropdownUserProfile = (props) => {
  const styles = {
    srOnly: "sr-only",
    dropdown: {
      wrapper: "dropdown profile-menu mx-2",
      menu:
        "dropdown-menu absolute right-0 py-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none min-w-1/4",
      button:
        "dropdown-button p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
      menuItem: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
      notification: {
        item: "flex items-center px-4 py-3 -mx-2 border-b hover:bg-gray-100",
        lastItem: "flex items-center px-4 py-3 -mx-2 hover:bg-gray-100",
        image: "object-cover w-8 h-8 mx-1 rounded-full",
        para: "mx-2 text-sm text-gray-600",
        button:
          "block py-2 font-bold text-center text-white bg-gray-800 border-b",
      },
    },
  };
  return (
    <div className={styles.dropdown.wrapper}>
      <button
        type="button"
        className={styles.dropdown.button}
        id="user-menu"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className={styles.srOnly}>Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
      <div
        className={styles.dropdown.menu}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <NavLink
          to="/user/profile"
          className={styles.dropdown.menuItem}
          role="menuitem"
        >
          Your Profile
        </NavLink>
        <NavLink
          to="/user/settings"
          className={styles.dropdown.menuItem}
          role="menuitem"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownUserProfile;
