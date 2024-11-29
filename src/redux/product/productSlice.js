import { createSlice } from "@reduxjs/toolkit";
import {
  addNewProduct,
  deleteProductById,
  getProductById,
  getProductCategories,
  getProductList,
  getRelatedProducts,
  getTotalProducts,
  updateProduct,
} from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    categories: [],
    loading: false,
    error: null,
    query: {
      page: 1,
      limit: 10,
    },
    total: 0,
    relatedProducts: {
      loading: false,
      items: [],
    },
    add: {
      loading: false,
      success: false,
    },
    delete: {
      loading: false,
      success: false,
    },
    edit: {
      loading: false,
      success: false,
    },
  },
  reducers: {
    setLimit: (state, action) => {
      state.query = { ...state.query, limit: action.payload };
    },
    setSort: (state, action) => {
      state.query = { ...state.query, sort: action.payload };
    },
    setFilters: (state, action) => {
      state.query = { ...state.query, filters: action.payload };
    },
    setPage: (state, action) => {
      state.query = { ...state.query, page: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.add.success = false;
        state.delete.success = false;
        state.edit.success = false;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.add.loading = true;
        state.error = null;
      })
      .addCase(addNewProduct.fulfilled, (state) => {
        state.add.loading = false;
        state.add.success = true;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.add.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProductById.pending, (state) => {
        state.delete.loading = true;
        state.error = null;
      })
      .addCase(deleteProductById.fulfilled, (state) => {
        state.delete.loading = false;
        state.delete.success = true;
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.delete.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.edit.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.edit.loading = false;
        state.edit.success = true;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.edit.loading = false;
        state.error = action.payload;
      })
      .addCase(getRelatedProducts.pending, (state) => {
        state.relatedProducts.loading = true;
        state.error = null;
      })
      .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts.loading = false;
        state.relatedProducts.items = action.payload;
      })
      .addCase(getRelatedProducts.rejected, (state, action) => {
        state.relatedProducts.loading = false;
        state.error = action.payload;
      })
      .addCase(getTotalProducts.fulfilled, (state, action) => {
        state.total = action.payload.total;
      });
  },
});

export const { setLimit, setSort, setFilters, setPage } =
  productSlice.actions;

export default productSlice.reducer;
