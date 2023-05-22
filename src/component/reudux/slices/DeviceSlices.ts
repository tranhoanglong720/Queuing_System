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
  ListDevice: [],
  Device: {},
};

export const getListDevice = createAsyncThunk(
  "Device/ListDevice",
  async (rejectWithValue) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Device`))
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

export const getDevice = createAsyncThunk(
  "Device/Devices",
  async (values: string, { rejectWithValue }) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Device/${values}`))
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

const DeviceSlices = createSlice({
  name: "Device",
  initialState,
  reducers: {
    AddDevice(state, action) {
      const data = dataref.ref(`Device`).push();
      data
        .set({
          ...action.payload,
          id: data.key,
        })
        .catch(alert);
    },
    updateDevice(state, action) {
      dataref
        .ref("Device/" + action.payload.id)
        .update(action.payload)
        .catch(alert);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListDevice.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getListDevice.fulfilled, (state, action: Action) => {
      state.ListDevice = action.payload;
    });
    builder.addCase(getListDevice.rejected, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getDevice.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getDevice.fulfilled, (state, action: Action) => {
      state.Device = action.payload;
    });
    builder.addCase(getDevice.rejected, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export default DeviceSlices;
