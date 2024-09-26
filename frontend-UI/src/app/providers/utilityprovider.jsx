'use client';
import React, { createContext, useState } from 'react';

export const UtilityCons = createContext();

const utilityprovider = ({ children }) => {
  const [chatBot, setChatBot] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [data,setData] = useState(null)

  return (
    <UtilityCons.Provider value={{data,setData, chatBot, setChatBot,moreInfo, setMoreInfo }}>
      {children}
    </UtilityCons.Provider>
  );
};

export default utilityprovider;
