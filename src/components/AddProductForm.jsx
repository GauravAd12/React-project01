/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addNewProduct, updateProduct } from "../redux/product/productActions";
import { GrAdd } from "react-icons/gr";
import { BiPencil } from "react-icons/bi";
import Spinner from "./Spinner";
import { PRODUCTS_ROUTE } from "../constants/routes";

const AddProductForm = ({ product }) => {
  const {
    add: { loading: addPending, success: addSuccess },
    edit: { loading: editPending, success: editSuccess },
  } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: product ?? {},
    disabled: editPending,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function submitForm(data) {
    if (product) {
      dispatch(updateProduct(data));
    } else {
      dispatch(addNewProduct(data));
    }
  }

  useEffect(() => {
    if (addSuccess) reset();

    if (editSuccess) {
      reset();

      toast.success("Product updated successfully.", {
        autoClose: 1500,
        onClose: () => {
          navigate(`/${PRODUCTS_ROUTE}`);
        },
      });
    }
  }, [reset, addSuccess, editSuccess, navigate]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="py-1">
        <label htmlFor="name" className="ml-1 font-semibold text-sm">
          Product Name
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("name", {
            required: "Product name is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">{errors.name?.message}</p>
      </div>
      <div className="py-1">
        <label htmlFor="category" className="ml-1 font-semibold text-sm">
          Category
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("category", {
            required: "Category is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.category?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="brand" className="ml-1 font-semibold text-sm">
          Brand
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("brand", {
            required: "Brand is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.brand?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="price" className="ml-1 font-semibold text-sm">
          Price
        </label>
        <input
          type="number"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("price", {
            required: "Price is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.price?.message}
        </p>
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          className={`${
            product
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-600 hover:bg-green-700"
          } text-white rounded py-2 cursor-pointer w-full flex justify-center items-center`}
        >
          <span className="mr-2">
            {product ? "Edit Product" : "Add Product"}
          </span>
          {addPending || editPending ? (
            <Spinner />
          ) : product ? (
            <BiPencil />
          ) : (
            <GrAdd />
          )}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default AddProductForm;
