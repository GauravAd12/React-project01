/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { getRelatedProducts } from "../redux/product/productActions";

const RelatedProducts = ({ category }) => {
  const {
    relatedProducts: { loading, items },
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelatedProducts({ filters: { category } }));
  }, [dispatch, category]);

  return (
    <>
      <h2 className="text-2xl my-3">Related Products</h2>
      {loading ? (
        <div className="flex items-center justify-center w-100 h-[70vh]">
          <Spinner height="h-20" width="w-20" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-5">
          {items.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </>
  );
};

export default RelatedProducts;
