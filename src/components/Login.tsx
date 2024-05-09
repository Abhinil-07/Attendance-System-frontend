import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";

import { useState } from "react";

import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
// import userAtom from "../atoms/userAtom";
import authScreenAtom from "../atoms/authAtom";

export const Login = () => {
  // const setUser = useSetRecoilState(userAtom)
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const handleLogin = () => {
    console.log(inputs);
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Login"} />
          <SubHeading label={"Enter your infromation to login"} />
          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            onchange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onchange={(e) => {
              setInputs({ ...inputs, password: e.target.value });
            }}
          />
          <div className="pt-4">
            <Button label={"Login"} onClick={handleLogin} />
          </div>
          <div className="py-2 text-sm flex justify-center">
            <div>
              <p>Don't have an account?</p>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                ("signup");
                setAuthScreen("signup");
              }}
              className="pointer underline pl-1 cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
