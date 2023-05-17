import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, set, getDatabase, child } from "firebase/database";
import { dataref } from "../../fireBase/FireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../fireBase/FireBase";

export interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  ListRole: [],
  Role: {},
};

export const getListRole = createAsyncThunk(
  "Role/ListRole",
  async (rejectWithValue) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Role`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let temp: any = [];
            snapshot.forEach((item: any) => {
              // console.log(item.val());
              // console.log(item.key);
              temp.push(item.val());
            });
            resolve(temp); // resolve the promise with the populated temp array
          } else {
            console.log("No data available");
            return [];
          }
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }
);

export const getRole = createAsyncThunk(
  "Role/Roles",
  async (values: string, { rejectWithValue }) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Role/${values}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.val()); // resolve the promise with the populated temp array
          } else {
            console.log("No data available");
            return [];
          }
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }
);

const RoleSlices = createSlice({
  name: "Role",
  initialState,
  reducers: {
    AddRole(state, action) {
      const data = dataref.ref(`Role`).push();
      data
        .set({
          ...action.payload,
          id: data.key,
        })
        .catch(alert);
    },
    updateRole(state, action) {
      dataref
        .ref("Role/" + action.payload.id)
        .update(action.payload)
        .catch(alert);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListRole.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getListRole.fulfilled, (state, action: Action) => {
      state.ListRole = action.payload;
    });
    builder.addCase(getListRole.rejected, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getRole.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getRole.fulfilled, (state, action: Action) => {
      state.Role = action.payload;
    });
    builder.addCase(getRole.rejected, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export default RoleSlices;
