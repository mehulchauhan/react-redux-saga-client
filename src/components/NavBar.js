import React from "react";
import { NavLink } from "react-router-dom";
import DropdownNotifications from "./dropdown/DropdownNotifications";
import DropdownUserProfile from "./dropdown/DropdownUserProfile";
// import useMediaQuery from "../hooks/useMediaQuery";

const NavBar = (props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const styles = {
    nav: "bg-gray-800",
    navWrapper: "px-2 mx-auto max-w-7xl sm:px-6 lg:px-8",
    navWrapperOuter: "relative flex items-center justify-between h-16",

    mobileButton: {
      wrapper: "absolute inset-y-0 left-0 flex items-center sm:hidden",
      button:
        "inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
      burgerIcon: "block w-6 h-6",
    },
    srOnly: "sr-only",
    menu: {
      wrapper:
        "flex items-center justify-center flex-1 sm:items-stretch sm:justify-start",
      item: {
        wrapper: menuOpen
          ? "absolute top-16 -inset-x-2 bg-gray-800 h-screen"
          : "hidden sm:block sm:ml-6",
        innerWrapper: menuOpen ? "flex flex-col" : "flex space-x-4",
        inactive:
          "px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white",
        active:
          "px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md",
      },
    },
    logo: {
      wrapper: "flex items-center flex-shrink-0",
      smallImage: "block w-auto h-8 lg:hidden",
      largeImage: "hidden w-auto h-8 lg:block",
    },
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className={styles.navWrapperOuter}>
          <div className={styles.mobileButton.wrapper}>
            {/* Mobile menu button */}
            <button
              type="button"
              className={styles.mobileButton.button}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={styles.srOnly}>Open main menu</span>
              <svg
                className={styles.mobileButton.burgerIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className={styles.menu.wrapper}>
            <div className={styles.logo.wrapper}>
              <NavLink exact to={"/"} onClick={() => setMenuOpen(false)}>
                <img
                  className={styles.logo.smallImage}
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </NavLink>
              <NavLink exact to={"/"} onClick={() => setMenuOpen(false)}>
                <img
                  className={styles.logo.largeImage}
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </NavLink>
            </div>
            <div className={styles.menu.item.wrapper}>
              <div className={styles.menu.item.innerWrapper}>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                <NavLink
                  exact
                  to={"/"}
                  onClick={() => setMenuOpen(false)}
                  activeClassName={styles.menu.item.active}
                  className={styles.menu.item.inactive}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/counter"
                  onClick={() => setMenuOpen(false)}
                  activeClassName={styles.menu.item.active}
                  className={styles.menu.item.inactive}
                >
                  Counter
                </NavLink>

                <NavLink
                  to="/hello"
                  onClick={() => setMenuOpen(false)}
                  activeClassName={styles.menu.item.active}
                  className={styles.menu.item.inactive}
                >
                  Hello
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex">
            <DropdownNotifications />
            <DropdownUserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
