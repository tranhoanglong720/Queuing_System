import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, set, getDatabase } from "firebase/database";
import { dataref } from "../../fireBase/FireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../fireBase/FireBase";

const initialState = {
  User: {},
};

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
    updatePackTicket(state, action) {
      dataref
        .ref("User/" + action.payload.id)
        .update(action.payload)
        .catch(alert);
    },
  },
  extraReducers: (builder) => {},
});

export default AccountSlices;
