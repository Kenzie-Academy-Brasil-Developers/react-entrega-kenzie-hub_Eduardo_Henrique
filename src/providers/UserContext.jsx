import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { toast } from "react-toastify";
import { api } from "../services";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userLogged, setUserLogged] = useState(null);

  const [techs, setTechs] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const show = (event) => {
    event.preventDefault();

    if (!showPassword) {
      setShowPassword(true);
    } else if (showPassword) {
      setShowPassword(false);
    }
  };

  const userLogin = async (user) => {
    try {
      const response = await api.post("sessions", user);
      window.localStorage.clear();

      window.localStorage.setItem("@KenzieHub:Token", response.data.token);
      window.localStorage.setItem("@KenzieHub:UserId", response.data.user.id);

      setUserLogged(response.data.user);
      setTechs(response.data.user.techs);

      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha invalidos");
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setUserLogged(null);
    navigate("/");
  };

  const userRegister = async (data) => {
    try {
      await api.post("users", data);
      toast.success("Conta criada com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Esse email ja existe");
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("@KenzieHub:Token");

    if (token) {
      const readerUser = async () => {
        try {
          const response = await api.get(`profile/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserLogged(response.data);
          setTechs(response.data.techs);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      };
      readerUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        show,
        showPassword,
        userRegister,
        userLogged,
        techs,
        setTechs,
        setUserLogged,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
