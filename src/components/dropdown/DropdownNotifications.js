import React from "react";

const DropdownNotifications = (props) => {
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
          "block py-2 font-bold text-center text-white bg-gray-800 border-b w-full",
      },
    },
  };
  return (
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
          <div className={styles.dropdown.notification.item}>
            <img
              className={styles.dropdown.notification.image}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <p className={styles.dropdown.notification.para}>
              <span className="font-bold">Sara Salah</span> replied on the{" "}
              <span className="font-bold text-blue-500">Upload Image</span>{" "}
              artical . 2m
            </p>
          </div>
          <div className={styles.dropdown.notification.item}>
            <img
              className={styles.dropdown.notification.image}
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <p className={styles.dropdown.notification.para}>
              <span className="font-bold">Slick Net</span> start following you .
              45m
            </p>
          </div>
          <div className={styles.dropdown.notification.item}>
            <img
              className={styles.dropdown.notification.image}
              src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <p className={styles.dropdown.notification.para}>
              <span className="font-bold">Jane Doe</span> Like Your reply on{" "}
              <span className="font-bold text-blue-500">Test with TDD</span>{" "}
              artical . 1h
            </p>
          </div>
          <div className={styles.dropdown.notification.lastItem}>
            <img
              className={styles.dropdown.notification.image}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
              alt="avatar"
            />
            <p className={styles.dropdown.notification.para}>
              <span className="font-bold">Abigail Bennett</span> start following
              you . 3h
            </p>
          </div>
        </div>
        <button className={styles.dropdown.notification.button}>
          See all notifications
        </button>
      </div>
    </div>
  );
};

export default DropdownNotifications;
