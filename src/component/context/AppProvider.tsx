import React, { createContext, FC, useState } from "react";

interface AppContextProps {
  show: boolean;

  setShow: (show: boolean) => void;

  active: string;

  setActive: (active: string) => void;

  changeDate: boolean;

  setchangeDate: (changeDate: boolean) => void;

  add: boolean;

  setAdd: (add: boolean) => void;

  update: boolean;

  setUpdate: (update: boolean) => void;

  item: object;

  setItem: (item: object) => void;

  status: string;

  setStatus: (status: string) => void;

  packed: boolean;

  setPacked: (packed: boolean) => void;

  reRender: boolean;

  setRerender: (reRender: boolean) => void;

  openIn: boolean;

  setOpenIn: (openIn: boolean) => void;

  clearState: () => void;
}

export const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<any> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);

  const [changeDate, setchangeDate] = useState<boolean>(false);

  const [update, setUpdate] = useState<boolean>(false);

  const [add, setAdd] = useState<boolean>(false);

  const [status, setStatus] = useState<string>("Tất cả");

  const [item, setItem] = useState<object>({});

  const [active, setActive] = useState<string>("");

  const [packed, setPacked] = useState<boolean>(true);

  const [reRender, setRerender] = useState<boolean>(false);

  const [openIn, setOpenIn] = useState<boolean>(false);

  const clearState = () => {
    setShow(false);

    setAdd(false);

    setUpdate(false);

    setPacked(true);

    setActive("");

    setStatus("");

    setchangeDate(false);

    setRerender(false);

    setOpenIn(false);

    setItem({});
  };

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        active,
        setActive,
        changeDate,
        setchangeDate,
        add,
        setAdd,
        update,
        setUpdate,
        item,
        setItem,
        status,
        setStatus,
        packed,
        setPacked,
        reRender,
        setRerender,
        openIn,
        setOpenIn,
        clearState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
