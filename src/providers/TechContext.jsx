import { createContext, useContext } from "react";

import { useState } from "react";

import { toast } from "react-toastify";
import { api } from "../services";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setTechs, techs } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [techSelect, setTechSelect] = useState({});

  const modalOpen = () => {
    if (!showModal) {
      setShowModal(true);
    } else if (showModal) {
      setShowModal(false);
    }
  };

  const modalUpdateOpen = (tech) => {
    if (!showModalUpdate) {
      setTechSelect(tech);
      setShowModalUpdate(true);
    } else if (showModalUpdate) {
      setTechSelect({});
      setShowModalUpdate(false);
    }
  };

  const createTechsUser = async (data) => {
    try {
      const token = window.localStorage.getItem("@KenzieHub:Token");

      const response = await api.post(`users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTech = [...techs, response.data];

      toast.success(`Tecnologia criada com sucesso`);

      setTechs(newTech);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const techUserUpdate = async (data, id) => {
    try {
      const token = window.localStorage.getItem("@KenzieHub:Token");
      const response = await api.put(`users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updateTech = techs.map((tech) => {
        if (id == tech.id) {
          return { ...tech, ...data };
        } else {
          return tech;
        }
      });

      setTechs(updateTech);
      setShowModalUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const techUserDelete = async (id) => {
    try {
      const token = window.localStorage.getItem("@KenzieHub:Token");
      const response = await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = techs.filter((tech) => tech.id !== id);

      setTechs(newTechList);
      setShowModalUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        showModal,
        showModalUpdate,
        modalOpen,
        modalUpdateOpen,
        techUserUpdate,
        techUserDelete,
        createTechsUser,
        techSelect,
        setShowModal,
        setShowModalUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
