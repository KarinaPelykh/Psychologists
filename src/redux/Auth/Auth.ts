import { onAuthStateChanged } from "firebase/auth";
import { saveUser } from "./AuthSlice";
import { store } from "../store";
import { auth } from "../../firebase/config";
export const monitorAuthState = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = await user.getIdToken();
      store.dispatch(
        saveUser({
          user: { id: user.uid, email: user.email, name: user.displayName },
          token,
        })
      );
    } else {
      store.dispatch(saveUser({ user: null, token: null }));
    }
  });
};
