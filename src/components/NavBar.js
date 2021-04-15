import React from "react";
import { NavLink } from "react-router-dom";
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
            <div className={styles.dropdown.wrapper}>
              <button
                className={styles.dropdown.button}
                id="user-notifications"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="w-6 h-6"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div
                className={styles.dropdown.menu}
                role="menu"
                aria-orientation="vertical"
                arial-labelledby="user-notifications"
              >
                <div className="py-2">
                  <a className={styles.dropdown.notification.item}>
                    <img
                      className={styles.dropdown.notification.image}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                    <p className={styles.dropdown.notification.para}>
                      <span className="font-bold">Sara Salah</span> replied on
                      the{" "}
                      <span className="font-bold text-blue-500">
                        Upload Image
                      </span>{" "}
                      artical . 2m
                    </p>
                  </a>
                  <a className={styles.dropdown.notification.item}>
                    <img
                      className={styles.dropdown.notification.image}
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      alt="avatar"
                    />
                    <p className={styles.dropdown.notification.para}>
                      <span className="font-bold">Slick Net</span> start
                      following you . 45m
                    </p>
                  </a>
                  <a className={styles.dropdown.notification.item}>
                    <img
                      className={styles.dropdown.notification.image}
                      src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                    <p className={styles.dropdown.notification.para}>
                      <span className="font-bold">Jane Doe</span> Like Your
                      reply on{" "}
                      <span className="font-bold text-blue-500">
                        Test with TDD
                      </span>{" "}
                      artical . 1h
                    </p>
                  </a>
                  <a className={styles.dropdown.notification.lastItem}>
                    <img
                      className={styles.dropdown.notification.image}
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                      alt="avatar"
                    />
                    <p className={styles.dropdown.notification.para}>
                      <span className="font-bold">Abigail Bennett</span> start
                      following you . 3h
                    </p>
                  </a>
                </div>
                <a className={styles.dropdown.notification.button}>
                  See all notifications
                </a>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
