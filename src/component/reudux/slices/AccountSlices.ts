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
  ListUser: [],
  User: {},
};

export const getListUser = createAsyncThunk(
  "Acount/ListUser",
  async (rejectWithValue) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `User`))
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

export const getUser = createAsyncThunk(
  "Acount/User",
  async (values: string, { rejectWithValue }) => {
    const dbRef = ref(getDatabase());
    return new Promise((resolve, reject) => {
      get(child(dbRef, `User/${values}`))
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

const AccountSlices = createSlice({
  name: "Acount",
  initialState,
  reducers: {
    AddUser(state, action) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
          return user.uid;
        })
        .then((id) => {
          console.log(id);
          const data = dataref.ref("User/" + id);

          data
            .set({
              ...action.payload,
              id: id,
            })
            .catch(alert);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      // const db = getDatabase();
      // set(ref(db, "users/"), {
      //   ...action.payload,
      // });
    },
    updateUser(state, action) {
      dataref
        .ref("User/" + action.payload.id)
        .update(action.payload)
        .catch(alert);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListUser.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getListUser.fulfilled, (state, action: Action) => {
      state.ListUser = action.payload;
    });
    builder.addCase(getListUser.rejected, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
      };
    });
    builder.addCase(getUser.fulfilled, (state, action: Action) => {
      state.User = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

export default AccountSlices;
