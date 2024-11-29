import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
import { Link, NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { BiCart, BiLogoShopify, BiLogOut, BiMenu } from "react-icons/bi";
import CartDropdown from "./CartDropdown";
import {
  AUTH_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../constants/routes";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const isAuth = user ? true : false;

  const dispatch = useDispatch();

  const linkClass = ({ isActive }) =>
    isActive
      ? "block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0"
      : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0";

  function logout() {
    dispatch(logoutUser());

    localStorage.removeItem("authToken");
  }

  return (
    <header className="sticky top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={HOME_ROUTE} className="flex items-center">
            <BiLogoShopify className="text-5xl mr-2" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Shopify
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isAuth ? (
              <div className="flex ">
                <div className="relative flex items-center">
                  <button
                    className="mr-2 px-3 rounded"
                    onClick={() => setShowCart(!showCart)}
                  >
                    <BiCart className="text-xl" />
                  </button>
                  <div
                    className={`${
                      showCart ? "block" : "hidden"
                    } absolute top-16 -right-full`}
                  >
                    <CartDropdown />
                  </div>
                </div>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2focus:outline-none flex items-center"
                  onClick={logout}
                >
                  <span>Logout</span>
                  <BiLogOut className="text-xl ml-2" />
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to={`${AUTH_ROUTE}/${LOGIN_ROUTE}`}
                  className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </NavLink>
                <NavLink
                  to={`${AUTH_ROUTE}/${REGISTER_ROUTE}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                >
                  Sign Up
                </NavLink>
              </>
            )}
            <button
              className="inline-flex items-center p-2 ml-1 text-sm bg-slate-900 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <BiMenu className="text-2xl" />
            </button>
          </div>
          <div
            className={`${
              showMobileMenu ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          >
            {isAuth ? (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navMenu
                  .filter((menu) => menu.auth === isAuth)
                  .map((menu) => {
                    return (
                      <li key={menu.label}>
                        <NavLink to={menu.route} className={linkClass}>
                          {menu.label}
                        </NavLink>
                      </li>
                    );
                  })}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
