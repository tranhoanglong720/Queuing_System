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
  ListLevel: [],
  Level: {},
};

export const getListLevel = createAsyncThunk(
  "Level/ListLevel",
  async (rejectWithValue) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Level`))
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

export const getLevel = createAsyncThunk(
  "Level/Levels",
  async (values: string, { rejectWithValue }) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `Level/${values}`))
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

const LevelSlices = createSlice({
  name: "Level",
  initialState,
  reducers: {
    addLevel(state, action) {
      const data = dataref.ref(`Level`).push();
      data
        .set({
          ...action.payload,
          id: data.key,
        })
        .catch(alert);
    },
    updateLevel(state, action) {
      dataref
        .ref("Level/" + action.payload.id)
        .update(action.payload)
        .catch(alert);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListLevel.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getListLevel.fulfilled, (state, action: Action) => {
      state.ListLevel = action.payload;
    });
    builder.addCase(getListLevel.rejected, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getLevel.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getLevel.fulfilled, (state, action: Action) => {
      state.Level = action.payload;
    });
    builder.addCase(getLevel.rejected, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export default LevelSlices;
