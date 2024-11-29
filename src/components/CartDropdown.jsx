import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../redux/cart/cartSlice";

/* eslint-disable react/prop-types */
const CartListItems = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(removeProductFromCart(id));
  }

  return (
    <div className="bg-white px-5 py-3 my-2 rounded w-full flex justify-between items-center">
      <div>
        <h4 className="text-xl font-semibold">
          {name}
          <span className="text-lg font-normal ml-2">x{quantity}</span>
        </h4>
        <p className="text-sm text-yellow-600">${price}</p>
      </div>
      <button onClick={removeItem}>
        <BiTrash className="text-red-500" />
      </button>
    </div>
  );
};

const CartDropdown = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <div className="bg-slate-100 text-black shadow-md py-5 px-8 rounded min-w-72">
      {products.length == 0 ? (
        <div className="w-max text-slate-800">Cart is empty.</div>
      ) : (
        products.map((product) => (
          <CartListItems key={product.id} {...product} />
        ))
      )}
    </div>
  );
};

export default CartDropdown;
