import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const [basket, setBasket] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);




useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);



return (

<AuthContext.Provider value={{basket, setBasket, isLoggedIn, setIsLoggedIn}}>
{children}
</AuthContext.Provider>


)

};