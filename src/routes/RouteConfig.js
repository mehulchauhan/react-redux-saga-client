import Home from "../container/Home";
import Hello from "../container/Hello";
import Counter from "../container/Counter";
import NoMatch from "../container/NoMatch";
import Profile from "../container/user/Profile";
import Settings from "../container/user/Settings";

const RouteConfig = [
  {
    Page: Home,
    Path: "/",
    Label: "Home",
    ExactMatch: true,
    Secured: false,
  },
  {
    Page: Hello,
    Path: "/hello",
    Label: "Home",
    ExactMatch: false,
    Secured: false,
  },
  {
    Page: Counter,
    Path: "/counter",
    Label: "Counter",
    ExactMatch: false,
    Secured: false,
  },
  {
    Page: Profile,
    Path: "/user/profile",
    Label: "Profile",
    ExactMatch: false,
    Secured: true,
  },
  {
    Page: Settings,
    Path: "/user/settings",
    Label: "Settings",
    ExactMatch: false,
    Secured: true,
  },
  {
    Page: NoMatch,
    Path: "",
    Label: "Not Found",
    ExactMatch: false,
    Secured: false,
  },
];
export default RouteConfig;
