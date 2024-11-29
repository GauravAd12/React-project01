import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/product/productActions";
import { FaStar, FaStarHalf } from "react-icons/fa";
import headphone from "../../assets/headphone.jpg";
import Spinner from "../../components/Spinner";
import RelatedProducts from "../../components/RelatedProducts";

const ProductDetails = () => {
  const params = useParams();

  const { loading, product } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  if (loading)
    return (
      <div className="flex items-center justify-center w-100 h-[80vh]">
        <Spinner height="h-20" width="w-20" />
      </div>
    );

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-evenly items-center py-10">
        <img src={headphone} className="h-[80vh] w-auto" alt="" />
        <div className="lg:w-2/5 py-10">
          <span className="rounded-2xl bg-green-500 px-2">
            {product?.category}
          </span>
          <h1 className="text-5xl font-semibold">{product?.name}</h1>
          <div className="flex text-orange-400 mt-2 ml-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <p className="py-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ad
            magni corporis nostrum odio voluptas numquam quibusdam dolore libero
            natus nisi odit ea sint voluptatum voluptatem aut, pariatur nobis
            officia alias rerum. Tempore, dolore! Beatae velit assumenda sequi
            distinctio ab.
          </p>

          <p className="mb-3">Brand: {product?.brand}</p>

          <h4 className="text-slate-700 mb-5">
            <span className="text-4xl">$</span>
            <span className="text-3xl">{product?.price}</span>
          </h4>

          <button className="bg-black px-5 py-2 text-white">Buy Now</button>
        </div>
      </div>
      <hr />
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default ProductDetails;
