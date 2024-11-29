/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import headphone from "../assets/headphone.jpg";
import { BiCart, BiPencil, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductById } from "../redux/product/productActions";
import { useState } from "react";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { addProductToCart } from "../redux/cart/cartSlice";
import { EDIT_ROUTE, PRODUCTS_ROUTE } from "../constants/routes";

const ProductCard = ({
  id,
  name,
  category,
  brand = "Default brand",
  price = 0,
}) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    delete: { loading },
  } = useSelector((state) => state.product);

  function deleteProduct() {
    setShowDeletePopup(true);
  }

  function confirmDeleteProduct() {
    dispatch(deleteProductById(id));
  }

  function addToCart() {
    dispatch(
      addProductToCart({
        id,
        name,
        category,
        brand,
        price,
      })
    );
  }

  return (
    <div className="px-5 py-10 rounded-xl text-center shadow-md border bg-white">
      <img src={headphone} alt="headphone" className="h-24 w-auto mx-auto" />
      <div className="rounded-2xl bg-green-500 px-2 w-max mx-auto mt-5">
        {category}
      </div>
      <h2 className="text-3xl font-semibold mb-3">{name}</h2>
      <div>{brand}</div>
      <div className={`text-xl text-yellow-600 mb-3`}>${price}</div>
      <div className="flex justify-between items-center">
        <Link to={`${id}`} className="text-white bg-black px-5 py-2 rounded">
          Shop Now
        </Link>
        {user ? (
          <div className="flex">
            <button
              className="text-white bg-green-700 p-3 rounded ml-2"
              onClick={addToCart}
            >
              <BiCart />
            </button>
            <Link
              to={`/${PRODUCTS_ROUTE}/${EDIT_ROUTE}/${id}`}
              className="text-white bg-blue-500 p-3 rounded ml-2"
            >
              <BiPencil />
            </Link>
            <button
              className="text-white bg-red-500 p-3 rounded ml-2"
              onClick={deleteProduct}
            >
              <BiTrash />
            </button>
          </div>
        ) : (
          <button
            className="text-white bg-green-700 p-3 rounded ml-2"
            onClick={addToCart}
          >
            <BiCart />
          </button>
        )}
      </div>
      <Modal
        isOpen={showDeletePopup}
        setIsOpen={setShowDeletePopup}
        title="Delete Product"
        content={
          <div className="flex justify-start">
            Are you sure you want to delete this product?
          </div>
        }
        actions={
          <button
            className="bg-red-500 text-white py-2 px-5 rounded flex items-center"
            onClick={confirmDeleteProduct}
          >
            <span className="mr-2">Delete</span>
            {loading ? <Spinner /> : <BiTrash className="text-xl" />}
          </button>
        }
      />
    </div>
  );
};

export default ProductCard;
