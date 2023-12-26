import { createSlice } from "@reduxjs/toolkit";
import categoriesDb from '../data/categories.json'
import productsDb from '../data/products.json'

export const shopSlice = createSlice({
    name: 'shop',
    initialState:{
        categorySelected:'',
        productIdSelected:0,
        categories: categoriesDb,
        products: productsDb,
        productsFilteredByCategory: [], 
    },
    reducers:{
        setCategorySelected:(state, action) => {
            state.categorySelected = action.payload
            state.productsFilteredByCategory = state.products.filter(product => product.category === state.categorySelected)
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        }
    }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer