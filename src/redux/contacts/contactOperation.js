// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getContacts, addContacts, delContacts } from '../contactAPI';

// export const listContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getContacts();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContacts = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const data = await addContacts(contact);
//       return data;
//     } catch (error) {
//         return rejectWithValue(error.message);

//     }
//   }
// );

// export const delContacts = createAsyncThunk(
//   'contacts/delContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await delContacts(id);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
