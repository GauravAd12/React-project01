import { useParams } from "react-router-dom";
import AddProductForm from "../../components/AddProductForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/product/productActions";
import Spinner from "../../components/Spinner";

const EditProduct = () => {
  const params = useParams();

  const { loading, product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(params?.id));
  }, [dispatch, params]);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto">
          <h1 className="font-semibold text-4xl mb-5">Edit Product</h1>
          {loading ? (
            <div className="flex items-center justify-center w-100 h-[70vh]">
              <Spinner height="h-20" width="w-20" />
            </div>
          ) : (
            <AddProductForm product={product} />
          )}
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
