import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const SellerLogin = () => {
  const [isSeller, setIsSeller, navigate] = useAppContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <div>SellerLogin</div>;
};

export default SellerLogin;
