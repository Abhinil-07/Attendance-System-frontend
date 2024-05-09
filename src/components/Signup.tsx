import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";

export const Signup = () => {
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    console.log(inputs);
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="John"
            label={"username"}
            onchange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
          />

          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            onchange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
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
            <Button label={"Sign up"} onClick={handleSignup} />
          </div>
          <div className="py-2 text-sm flex justify-center">
            <div>
              <p>Already have an account?</p>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setAuthScreen("login");
              }}
              className="pointer underline pl-1 cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
