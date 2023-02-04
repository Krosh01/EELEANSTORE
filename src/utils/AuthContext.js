import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  // GLOBAL USER INFORMATION 
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  const [data, setData] = useState([]);
  const products = data;

  // GLOBALLY AVAILABLE DATA 
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://kara-balta.p.rapidapi.com/products",
      headers: {
        "X-RapidAPI-Key": "3a51998120msh0c0766059662c27p13690cjsn79a06260df4d",
        "X-RapidAPI-Host": "kara-balta.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, data, products, setData }}>
      {children}
    </AuthContext.Provider>
  );
};