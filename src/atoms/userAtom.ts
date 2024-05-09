import { atom } from "recoil";

const loginDetails = localStorage.getItem("login-details") || "{}";

const userAtom = atom({
  key: "userAtom",
  default: JSON.parse(loginDetails),
});

export default userAtom;
