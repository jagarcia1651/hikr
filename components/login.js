import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <div className="w-max items-center">
      <button className="uppercase text-green border-2 border-brown px-4 py-0.5"  onClick={() => loginWithRedirect()}>Join Community</button>
    </div>
  );
};

export default LoginButton;