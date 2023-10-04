import { createSlice,createAsyncThunk, createAction } from "@reduxjs/toolkit";
import bCategoryService from "./bcategorySevice";




export const getCategories = createAsyncThunk('blogCategory/get-categories', async (thunkAPI) =>
{
    try
    {
        return await bCategoryService.getBlogCategories();
    } catch (error) 
    {
        return thunkAPI.rejectWithValue(error);
    }
});

export const createBlogCatyegory = createAsyncThunk(
 "blogCategory/create-category",
    async (catData, thunkAPI) =>
    {
        try
        {
            return await bCategoryService.createBlogCategory(catData);
        }
        catch (error)
        {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset_all");
const initialState = {
    bCategories: [],
     isError:false,
    isLoading:false,
    isSuccess:false,
    message:"",
}

export const bCategorySlice = createSlice({
    name: "bCategories",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
    {
        builder.addCase(getCategories.pending, (state) =>
        {
            state.isLoading = true;
        })
            .addCase(getCategories.fulfilled, (state, action) =>
            {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.bCategories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) =>
            {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createBlogCatyegory.pending, (state) =>
        {
            state.isLoading = true;
        })
            .addCase(createBlogCatyegory.fulfilled, (state, action) =>
            {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdBlogCategory = action.payload;
            })
            .addCase(createBlogCatyegory.rejected, (state, action) =>
            {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default bCategorySlice.reducer;
