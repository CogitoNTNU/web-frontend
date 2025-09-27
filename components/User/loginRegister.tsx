import { useState } from "react";
import UserLogin from "../../pages/userLogin";
import UserRegister from "../../pages/userRegister";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";

export default function LoginRegister() {
  const router = useRouter ()
 
  function handleClickLogin() {
    router.push("/userLogin")
  }

  function handleClickRegister() {
    router.push("/userRegister");
  }

  return (
    <div className="flex flex-col gap-4">
      <h1>Velkommen</h1>
      <Button text="Register" color="blue" onClick={handleClickRegister} />
      <Button text="Login" color="pink" onClick={handleClickLogin} />

      {/*
            # bool: render login
            # bool: render register

            if (renderLogin) {
            <UserLogin/>
            }
        */}
    </div>
  );
}
