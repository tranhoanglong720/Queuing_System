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
  ListService: [],
  Service: {},
};

export const getListService = createAsyncThunk(
  "Service/ListService",
  async (rejectWithValue) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Service`))
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

export const getService = createAsyncThunk(
  "Service/Services",
  async (values: string, { rejectWithValue }) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Service/${values}`))
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

const ServiceSlices = createSlice({
  name: "Service",
  initialState,
  reducers: {
    AddService(state, action) {
      const data = dataref.ref(`Service`).push();
      data
        .set({
          ...action.payload,
          id: data.key,
        })
        .catch(alert);
    },
    updateService(state, action) {
      dataref
        .ref("Service/" + action.payload.id)
        .update(action.payload)
        .catch(alert);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListService.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getListService.fulfilled, (state, action: Action) => {
      state.ListService = action.payload;
    });
    builder.addCase(getListService.rejected, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getService.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getService.fulfilled, (state, action: Action) => {
      state.Service = action.payload;
    });
    builder.addCase(getService.rejected, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export default ServiceSlices;
