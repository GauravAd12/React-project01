import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { useEffect } from "react";
import { getProductList } from "../redux/product/productActions";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { loading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList({ limit: 8 }));
  }, [dispatch]);

  return (
    <>
      <Hero />

      <section className="py-12 bg-slate-100 px-5">
        <div className="container mx-auto">
          <h2 className="text-4xl mb-5">Trending Products</h2>
          {loading ? (
            <div className="flex items-center justify-center w-100 h-[70vh]">
              <Spinner height="h-20" width="w-20" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-5">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
