import {
  ABOUT_ROUTE,
  AUTH_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  REGISTER_ROUTE,
} from "./routes";

const navMenu = [
  {
    label: "Home",
    route: HOME_ROUTE,
    auth: true,
  },
  {
    label: "About",
    route: ABOUT_ROUTE,
    auth: true,
  },
  {
    label: "Products",
    route: PRODUCTS_ROUTE,
    auth: true,
  },
  {
    label: "Contact",
    route: CONTACT_ROUTE,
    auth: true,
  },
  {
    label: "Login",
    route: `${AUTH_ROUTE}/${LOGIN_ROUTE}`,
    auth: false,
  },
  {
    label: "Register",
    route: `${AUTH_ROUTE}/${REGISTER_ROUTE}`,
    auth: false,
  },
];

export default navMenu;
