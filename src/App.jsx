import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./pages/products/List";
import ProductDetails from "./pages/products/Details";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layouts/AuthLayout";
import UnAuthLayout from "./layouts/UnAuthLayout";
import { useSelector } from "react-redux";
import EditProduct from "./pages/products/Edit";
import {
  ABOUT_ROUTE,
  AUTH_ROUTE,
  CONTACT_ROUTE,
  EDIT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  REGISTER_ROUTE,
} from "./constants/routes";

/**
 * hello world -> sentence case
 * helloWorld -> camel case // use in js
 * hello_world -> snake case
 * HelloWorld -> pascal case // use in jsx
 */

const App = () => {
  const { user } = useSelector((state) => state.auth);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={HOME_ROUTE} element={<MainLayout />}>
        <Route index element={<Home />} />
        
        <Route element={<AuthLayout user={user} />}>
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={PRODUCTS_ROUTE}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetails />} />
            <Route path={`${EDIT_ROUTE}/:id`} element={<EditProduct />} />
          </Route>
        </Route>

        <Route path={AUTH_ROUTE} element={<UnAuthLayout user={user} />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
