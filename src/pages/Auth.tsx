import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";

const Auth = () => {
  const authState = useRecoilValue(authScreenAtom);
  return <>{authState === "login" ? <Login /> : <Signup />}</>;
};

export default Auth;
