import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  setLimit,
  setPage,
  setSort,
} from "../redux/product/productSlice";
import { useEffect, useState } from "react";

const ProductsFilter = () => {
  const [pages, setPages] = useState([]);

  const { query, categories, total } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  function setProductsLimit(limit) {
    dispatch(setLimit(parseInt(limit)));
  }

  function sortProducts(sort) {
    dispatch(setSort(JSON.parse(sort)));
  }

  function filterProductByName(value) {
    dispatch(setFilters(value ? { name: value } : {}));
  }

  function filterProductByCategory(value) {
    dispatch(setFilters(value ? { category: value } : {}));
  }

  function setProductsPage(page) {
    dispatch(setPage(page));
  }

  useEffect(() => {
    const limit = query?.limit ?? 10;

    const totalPages = Math.ceil(total / limit);

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    setPages(pages);
  }, [query, total]);

  return (
    <div className="border rounded py-2 px-5 md:flex justify-between">
      <div className="py-2">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          className="bg-slate-100 rounded px-2 py-1 mx-3"
          value={query?.filters?.name}
          onChange={(e) => filterProductByName(e.target.value)}
        />
      </div>
      <div className="py-2">
        <label htmlFor="category">Category: </label>
        <select
          name="sort"
          id="sort"
          className="bg-slate-100 rounded px-2 py-1 mx-3"
          value={query?.filters?.category}
          onChange={(e) => filterProductByCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category} className="capitalize">
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="sort">Sort: </label>
        <select
          name="sort"
          id="sort"
          className="bg-slate-100 rounded px-2 py-1 mx-3"
          value={JSON.stringify(query?.sort)}
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="limit">Limit: </label>
        <select
          name="limit"
          id="limit"
          className="bg-slate-100 rounded px-2 py-1 mx-3"
          value={query?.limit ?? 10}
          onChange={(e) => setProductsLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className="py-2">
        <label htmlFor="page">Page: </label>
        <select
          name="page"
          id="page"
          className="bg-slate-100 rounded px-2 py-1 mx-3"
          onChange={(e) => setProductsPage(e.target.value)}
        >
          {pages.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
